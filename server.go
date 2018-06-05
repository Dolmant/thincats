package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"cloud.google.com/go/datastore"
	"github.com/gorilla/mux"
	"google.golang.org/api/iterator"

	"github.com/rs/cors"
	"gopkg.in/mgo.v2"
)

// Post holds the dynamic content
type Post struct {
	Content string
}

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
	dbAddress := "127.0.0.1:8080"
	if os.Getenv("db") != "" {
		dbAddress = os.Getenv("db")
	}
	session, err := mgo.Dial(dbAddress)
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

	ctx := context.Background()

	// Set your Google Cloud Platform project ID.
	projectID := "firm-champion-204312"
	if os.Getenv("projectID") != "" {
		projectID = os.Getenv("projectID")
	}

	// Creates a client.
	client, err := datastore.NewClient(ctx, projectID)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	// Sets the kind for the new entity.
	kind := "Post"
	// Sets the name/ID for the new entity.
	name := time.Now().String()
	// Creates a Key instance.
	postKey := datastore.NameKey(kind, name, nil)

	// Creates a Post instance.
	post := Post{
		Content: "<div></div>",
	}

	// Saves the new entity.
	if _, err := client.Put(ctx, postKey, &post); err != nil {
		log.Fatalf("Failed to save task: %v", err)
	}

	query := datastore.NewQuery("Task")

	it := client.Run(ctx, query)
	for {
		var post Post
		_, err := it.Next(&post)
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatalf("Error fetching next task: %v", err)
		}
		fmt.Printf("Post %q, \n", post.Content)
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
