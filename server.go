package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"

	"github.com/rs/cors"
)

type HandlerFunc func(http.ResponseWriter, *http.Request)

func (f HandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	f(w, r)
}

// Init constructs the server and routes. With a bigger project this might be separated into different files and accept config options
func Init() {
	log.Printf("Server logging started at: %s", time.Now())

	mux := mux.NewRouter()

	fs := http.FileServer(http.Dir("./SPA/dist"))

	mux.PathPrefix("/dist/").Handler(http.StripPrefix("/dist/", fs))

	fs = http.FileServer(http.Dir("./SPA/assets"))

	mux.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", fs))

	var genericHandle HandlerFunc
	genericHandle = func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./SPA/index.html")
	}
	mux.PathPrefix("/").Handler(genericHandle)

	handler := cors.Default().Handler(mux)

	err := http.ListenAndServe(":8079", handler)
	if err != nil {
		log.Fatalf("Failed to serve, %s", err.Error())
	}
}
