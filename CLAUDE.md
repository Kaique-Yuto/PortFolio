# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static single-page portfolio website for Kaique Yuto Rodrigues (Data Scientist). No build tools, no package manager — open `index.html` directly in a browser.

## Running the site

Open `index.html` in any browser. There is no build step, no server required, and no dependencies to install. All external libraries are loaded from CDNs (Bootstrap 5.3.3, ONNX Runtime Web, Slick Carousel).

## Architecture

The site has three source files:

- **`index.html`** — Single page with a fixed nav, home/bio section, and a project card carousel. Each project card uses `data-project="projectX"` to link to JS data.
- **`css/main.css`** — All styles. Uses CSS custom properties (e.g., `--header-height`). Font is Inconsolata via Google Fonts. Background color: `#1E1E2E`.
- **`assets/main.js`** — All interactivity. Contains the `projectData` object (the source of truth for project content), and the popup open/close logic triggered by clicking card thumbnails.

Project images are stored in `assets/<project_folder>/`.

## Adding a new project

Two changes are required:

1. **`index.html`** — Add a card inside `.card-carousel`:
   ```html
   <div class="card">
       <img src="assets/<folder>/thumbnail.png" class="card-img-top" data-project="projectX">
       <div class="card-body">
           <h5 class="card-title">Title</h5>
           <p class="card-text">Short description</p>
       </div>
   </div>
   ```

2. **`assets/main.js`** — Add a matching entry to `projectData` using the same key (`projectX`):
   ```js
   projectX: {
     title: "...",
     description: `...`,
     my_role: 'Data Scientist',
     skills: ["Skill1", "Skill2"],
     date: "Month DD, YYYY",
     images: [
       { src: "assets/<folder>/image.png", title: '', caption: "..." },
     ]
   }
   ```

The popup system dynamically renders content from `projectData` — no other files need to change.
