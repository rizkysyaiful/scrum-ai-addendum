#!/bin/sh
# Create a new blog post.   Usage: ./new-post.sh "Post title" [en|id]
set -e
title="$1"; lang="${2:-en}"
[ -n "$title" ] || { echo 'Usage: ./new-post.sh "Post title" [en|id]'; exit 1; }
case "$lang" in en|id) ;; *) echo "Language must be en or id"; exit 1;; esac
slug=$(printf '%s' "$title" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]\{1,\}/-/g' -e 's/^-//' -e 's/-$//')
file="_posts/$lang/$(date +%Y-%m-%d)-$slug.md"
[ -e "$file" ] && { echo "$file already exists"; exit 1; }
cat > "$file" <<POST
---
title: "$title"
description: "One or two sentences. Search engines and social cards show this."
ref: $slug
---

Write the post here in Markdown.
POST
echo "Created $file"
