package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gorilla/mux"

	"github.com/rs/cors"
)

// HandlerFunc is a generic function that satisfies the Handler interface
type HandlerFunc func(http.ResponseWriter, *http.Request)

func (f HandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	f(w, r)
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
