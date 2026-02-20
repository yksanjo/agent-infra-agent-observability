package main

import (
	"fmt"
	"log"
)

func main() {
	fmt.Println("AgentObservability starting...")
	if err := initialize(); err != nil {
		log.Fatal(err)
	}
	fmt.Println("AgentObservability ready")
}

func initialize() error {
	return nil
}
