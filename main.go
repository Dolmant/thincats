package main

//go:generate sh -c "cd ./SPA && npm install"
//go:generate sh -c "cd ./SPA && npm run build"

type Post struct {
	Content string
}

func main() {
	Init()
}
