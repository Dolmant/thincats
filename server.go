package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gorilla/mux"

	"github.com/rs/cors"
	"gopkg.in/mgo.v2"
)

// HandlerFunc is a generic function that satisfies the Handler interface
type HandlerFunc func(http.ResponseWriter, *http.Request)

func (f HandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	f(w, r)
}

func postsHandler(w http.ResponseWriter, r *http.Request) {
	session := getSession()
	postsCollection := session.DB("thincats").C("posts")
	if r.Method == http.MethodGet {
		getQuery := mgo.Query{}
		results := make(map[string]string)
		err := postsCollection.Find(getQuery).All(results)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("error"))
		} else {
			encoded, err := json.Marshal(results)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte("error"))
			} else {
				w.Write(encoded)
			}
		}
	} else if r.Method == http.MethodPost {
		content, err := ioutil.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("error"))
		}
		err = postsCollection.Insert(content)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("error"))
		} else {
			w.Write([]byte("success"))
		}
	}
}

func getSession() *mgo.Session {
	session, err := mgo.Dial("127.0.0.1:2007")
	if err != nil {
		panic(err)
	}
	return session
}

// Init constructs the server and routes. With a bigger project this might be separated into different files and accept config options
func Init() {
	log.Printf("Server logging started at: %s", time.Now())
	ex, err := os.Executable()
	if err != nil {
		panic(err)
	}
	exPath := filepath.Dir(ex)

	mux := mux.NewRouter()

	mux.HandleFunc("/posts/", postsHandler)

	fs := http.FileServer(http.Dir(exPath + string(os.PathSeparator) + "SPA" + string(os.PathSeparator) + "dist"))

	mux.PathPrefix("/dist/").Handler(http.StripPrefix("/dist/", fs))

	fs = http.FileServer(http.Dir(exPath + string(os.PathSeparator) + "SPA" + string(os.PathSeparator) + "assets"))

	mux.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", fs))

	var genericHandle HandlerFunc
	genericHandle = func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, exPath+string(os.PathSeparator)+"SPA"+string(os.PathSeparator)+"/index.html")
	}
	mux.PathPrefix("/").Handler(genericHandle)

	handler := cors.Default().Handler(mux)

	err = http.ListenAndServe(":8079", handler)
	if err != nil {
		log.Fatalf("Failed to serve, %s", err.Error())
	}
}
