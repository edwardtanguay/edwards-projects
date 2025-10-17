package main

import (
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"regexp"
)

func main() {
	dir := "."
	pattern := regexp.MustCompile(`^(\d{3})-(.+)$`)

	err := filepath.WalkDir(dir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			return nil
		}
		base := filepath.Base(path)
		matches := pattern.FindStringSubmatch(base)
		if matches == nil {
			return nil
		}
		newName := fmt.Sprintf("ex%s-%s", matches[1], matches[2])
		if base == newName {
			return nil
		}
		newPath := filepath.Join(filepath.Dir(path), newName)
		fmt.Printf("Renaming %s -> %s\n", base, newName)
		return os.Rename(path, newPath)
	})

	if err != nil {
		log.Fatalf("Error renaming files: %v", err)
	}
}
