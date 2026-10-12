# Rustic Garden · Mandevu at Kwa Nyuki

A static, dependency-free website. The landing page is **Mandevu at Kwa Nyuki** (plants), followed by the wider Rustic Garden world: Charlie's Coffee, nature experiences and the Universal Acceptance Day 2027 concept.

Live site (after deploying): https://groupdougie.github.io/rustic-garden/

## Project structure

```
index.html              the whole page
404.html                friendly not-found page
robots.txt, sitemap.xml search engine basics
.nojekyll               tells GitHub Pages to serve files as-is
.github/workflows/      optional GitHub Actions deploy
assets/
  css/style.css         all styling
  js/main.js            menu, scroll reveal, plant finder
  img/                  placeholder images (SVG), swap for real photos
```

## Deploy on GitHub Pages

### 1. Push the code

```bash
cd rustic-garden
git init -b main
git add .
git commit -m "Launch Mandevu at Kwa Nyuki site"
git remote add origin https://github.com/groupdougie/rustic-garden.git
git push -u origin main
```

### 2. Turn on Pages (pick one)

**Option A: simplest.** Repo → *Settings* → *Pages* → *Build and deployment* → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → Save. If you pick this, delete `.github/workflows/pages.yml` (or leave it; it will simply not be used).

**Option B: GitHub Actions.** Repo → *Settings* → *Pages* → Source: **GitHub Actions**. The included workflow deploys on every push to `main`.

After a minute or two the site is live at `https://groupdougie.github.io/rustic-garden/`.

> If you rename the repo or use a custom domain, update the URLs in `index.html` (`canonical`, `og:url`, `og:image`), `robots.txt`, `sitemap.xml` and the links in `404.html`.

### Custom domain (optional)

Add a `CNAME` file containing just your domain (e.g. `www.example.com`), set the DNS records GitHub describes in *Settings → Pages*, and tick *Enforce HTTPS*.

## Replacing the placeholder images

Every image is a labelled SVG placeholder in `assets/img/`. To swap one:

1. Add your photo (JPG or WebP is best for photos) to `assets/img/`.
2. Update the `src` in `index.html` (and the alt text to describe the real photo).

Or keep the same filename by exporting your photo to a file with the same name and extension.

| File | Where it appears | Suggested size |
|---|---|---|
| `hero-mandevu.svg` | Landing hero (no text baked in) | 1600 × 900 |
| `plant-snake.svg`, `plant-spider.svg`, `plant-foliage.svg` | Plant cards and finder | 1000 × 1100 |
| `plant-room.svg` | Gallery (large tile) | 1000 × 1000 |
| `gallery-1.svg` … `gallery-4.svg` | Gallery | 1000 × 1000 |
| `coffee.svg` | Coffee section | 1200 × 900 |
| `sylvotherapy.svg`, `pool.svg`, `farm.svg` | Experiences | 1200 × 900 |
| `ua-day.svg` | UA Day banner | 1600 × 900 |
| `og-image.svg` | Social sharing preview | 1200 × 630 |
| `favicon.svg` | Browser tab icon | square |

Tip: keep photos under about 300 KB each (compress with squoosh.app) so the page stays fast on mobile data.

**Social preview:** Facebook, WhatsApp, LinkedIn and X generally do not render SVG for link previews. Export a 1200 × 630 **JPG or PNG** as `assets/img/og-image.jpg`, then point `og:image` in `index.html` at it.

## Before you publish: confirm these details

- **Plant prices** (Snake plant KSh 250, Spider plant KSh 500) came from your earlier plant page; confirm they apply to Mandevu at Kwa Nyuki.
- **Phone number** (+254 722 704 997) came from your farm page. Your plant page listed other numbers for a different business address; confirm the right plant-sales contact.
- **Location and opening hours** are not stated anywhere on the site, deliberately. Add them to the FAQ and contact section when ready.
- **Delivery**: the FAQ says to ask; update once you have a policy.
- **UA Day 2027** is marked as proposed and subject to confirmation; update when details are final.

## Editing

No build step. Edit the files and push. To preview locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
