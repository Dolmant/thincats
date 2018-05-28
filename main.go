package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"cloud.google.com/go/datastore"
	"google.golang.org/api/iterator"
)

//go:generate sh -c "cd ./SPA && npm install"
//go:generate sh -c "cd ./SPA && npm run build"

type Post struct {
	Content string
}

func main() {
	Init()
	ctx := context.Background()

	// Set your Google Cloud Platform project ID.
	projectID := "firm-champion-204312"

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
}
