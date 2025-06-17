#!/bin/bash
for file in *.jpg *.png; do
  [ -f "$file" ] && cwebp "$file" -o "${file%.*}.webp"
done
