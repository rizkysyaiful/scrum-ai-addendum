# Scrum: AI Addendum

Website for the proposed "Scrum: AI Addendum", created by Ahmad Firdaus and Ricky Saif.
English at `/`, Bahasa Indonesia at `/id/`. Built with Jekyll, hosted on GitHub Pages
(no build step of your own: GitHub builds it on every push).

## Write a blog post

1. Run `./new-post.sh "Your title" en` (or `id`). Or, on github.com, use
   **Add file → Create new file** inside `_posts/en/` or `_posts/id/`, named
   `YYYY-MM-DD-your-title.md`.
2. Fill in the front matter and write in Markdown:

   ```markdown
   ---
   title: "Your title"
   description: "One or two sentences for search results and social cards."
   ref: your-title        # same value on the EN and ID versions links them (hreflang + language switch)
   ---
   ```
3. Commit and push. The post appears on the blog, the home page, the sitemap and the RSS feed.

Optional front matter: `author:` (the byline defaults to both creators), `image:` (social card, defaults to `/assets/og.png`).

## Preview locally

```sh
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

## Where things are

| What | Where |
| --- | --- |
| All page text, English | `_data/en.yml` |
| All page text, Indonesian | `_data/id.yml` |
| Scrum Guide quotations (verbatim, do not reword) | `_data/guide.yml` |
| Page structure | `_layouts/`, `_includes/` |
| Look and animation | `assets/css/main.css`, `assets/js/main.js` |
| Site title, creators, SEO settings | `_config.yml` |

## Publish on GitHub Pages

Push this folder to a GitHub repository, then **Settings → Pages → Deploy from a branch → main / (root)**.
`url` and `baseurl` are detected by GitHub Pages, so the site works as a project site, a user site or on a
custom domain without changes. After it is live, submit `/sitemap.xml` in Google Search Console and paste
the verification code into `google_site_verification` in `_config.yml`.

## Add a language

Copy `_data/en.yml` to `_data/<code>.yml` and translate it, copy `id/` to `<code>/` and change `lang`,
add a `_posts/<code>` entry under `defaults` in `_config.yml`, and add the code to the `langs` list in
`_layouts/default.html`.

## Credits

Scrum Guide quotations © 2020 Ken Schwaber and Jeff Sutherland, offered under CC BY-SA 4.0.
This addendum is an independent proposal and is not endorsed by the authors of the Scrum Guide.
