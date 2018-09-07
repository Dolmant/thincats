package main

//go:generate sh -c "cd ./spa && npm install"
//go:generate sh -c "cd ./spa && npm run build"

func main() {
	Init()
}
