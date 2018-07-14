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
	"google.golang.org/api/iterator"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/gzip"
	"github.com/gin-gonic/gin"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

// Post holds the dynamic content
type Post struct {
	Content string
}

// HandlerFunc is a generic function that satisfies the Handler interface
type HandlerFunc func(http.ResponseWriter, *http.Request)

func (f HandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	f(w, r)
}

func postsHandler(ctx context.Context, client *datastore.Client) func(c *gin.Context) {
	return func(c *gin.Context) {
		var err error
		if c.Request.Method == http.MethodGet {
			// todo move this up to init and just cache this. invalidate cache with a post
			postsCollection := []Post{}
			query := datastore.NewQuery("Post")

			it := client.Run(ctx, query)
			for {
				var post Post
				_, err = it.Next(&post)
				if err == iterator.Done {
					break
				}
				if err != nil {
					fmt.Println("Error fetching next post")
					break
				}
				fmt.Printf("Post %q, \n", post.Content)
				postsCollection = append(postsCollection, post)
			}
			if err != nil {
				c.Writer.WriteHeader(http.StatusInternalServerError)
				c.Writer.Write([]byte("error"))
			} else {
				encoded, err := json.Marshal(postsCollection)
				if err != nil {
					c.Writer.WriteHeader(http.StatusInternalServerError)
					c.Writer.Write([]byte("error"))
				} else {
					c.Writer.Write(encoded)
				}
			}
		} else if c.Request.Method == http.MethodPost {
			// Sets the kind for the new entity.
			kind := "Post"
			// Sets the name/ID for the new entity.
			name := time.Now().String()
			// Creates a Key instance.
			postKey := datastore.NameKey(kind, name, nil)

			// Creates a Post instance.
			var post Post
			// Saves the new entity.
			if _, err := client.Put(ctx, postKey, &post); err != nil {
				log.Fatalf("Failed to save task: %v", err)
			}

			content, err := ioutil.ReadAll(c.Request.Body)
			if err != nil {
				c.Writer.WriteHeader(http.StatusBadRequest)
				c.Writer.Write([]byte("error"))
			}
			err = json.Unmarshal(content, &post)
			if err != nil {
				c.Writer.WriteHeader(http.StatusInternalServerError)
				c.Writer.Write([]byte("error"))
			} else {
				c.Writer.Write([]byte("success"))
			}
			_, err = client.Put(ctx, &datastore.Key{}, post)
			if err != nil {
				c.Writer.WriteHeader(http.StatusInternalServerError)
				c.Writer.Write([]byte("error"))
			} else {
				c.Writer.Write([]byte("success"))
			}
		}
	}
}

// Init constructs the server and routes. With a bigger project this might be separated into different files and accept config options
func Init() {
	// todo add in http2 server push?
	log.Printf("Server logging started at: %s", time.Now())
	ex, err := os.Executable()
	check(err)
	exPath := filepath.Dir(ex)
	if os.Getenv("GOOGLE_APPLICATION_CREDENTIALS") == "" {
		os.Setenv("GOOGLE_APPLICATION_CREDENTIALS", exPath+string(os.PathSeparator)+"thincats-c1f1e998f5d9.json")
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

	router := gin.New()
	router.Use(gzip.Gzip(gzip.DefaultCompression))
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "HEAD"}
	config.AllowHeaders = []string{"Origin", "Authorization", "Content-Length", "Content-Type"}
	router.Use(cors.New(config))

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "success",
		})
	})
	router.GET("/posts", postsHandler(ctx, client))
	router.StaticFS("/bundles", http.Dir(exPath+string(os.PathSeparator)+"SPA"+string(os.PathSeparator)+"dist"+string(os.PathSeparator)+"bundles"))
	router.StaticFS("/assets", http.Dir(exPath+string(os.PathSeparator)+"SPA"+string(os.PathSeparator)+"assets"))
	router.StaticFile("/resources", exPath+string(os.PathSeparator)+"SPA"+string(os.PathSeparator)+"dist"+string(os.PathSeparator)+"resources.html")
	router.StaticFile("/", exPath+string(os.PathSeparator)+"SPA"+string(os.PathSeparator)+"dist"+string(os.PathSeparator)+"index.html")

	router.Run("127.0.0.1:8079")
	fmt.Println("serving")
}
