#!/bin/bash

# Collect files matching the pattern: three digits + dash at the start
shopt -s nullglob
files=( [0-9][0-9][0-9]-* )

# Sort files by name
IFS=$'\n' sorted=($(sort <<<"${files[*]}"))
unset IFS

counter=10

for file in "${sorted[@]}"; do
    # Skip if not a regular file
    [[ -f "$file" ]] || continue

    # Extract the part after the initial "NNN-"
    rest="${file:4}"

    # Extract extension if present
    if [[ "$file" == *.* ]]; then
        ext="${file##*.}"
        base="${rest%.*}"
        new_name=$(printf "%03d-%s.%s" "$counter" "$base" "$ext")
    else
        base="$rest"
        new_name=$(printf "%03d-%s" "$counter" "$base")
    fi

    # Only rename if name is actually changing
    if [[ "$file" != "$new_name" ]]; then
        mv "$file" "$new_name"
    fi

    counter=$((counter + 10))
done
