## Live Website

[Open BELLA.ZIP](https://bella289483.github.io/webdev-fall-2026/Midterm/bella-zip/)# BELLA.ZIP

BELLA.ZIP is my Web Development midterm. It is a personal portfolio that looks like an old desktop computer.

**Live site:** I will add the GitHub Pages link here after I publish the repository.

## My idea

I did not want the site to feel like a normal portfolio. I wanted it to feel like opening somebody's old computer and looking through their files. The desktop icons, windows, folders and taskbar are also the navigation.

The visual references are early-2000s computer interfaces, webcore and personal homepages. The site includes my product design, interactive media, video and visual design work.

## Site map

```text
Home desktop
├── Projects page
│   ├── Jadeite
│   ├── One Sided
│   ├── Find Me, Adopt Me
│   └── IDORE Cast Pass
├── About Me window
├── Contact window
├── Secret window
├── Trash window
└── Films / YouTube
```

## What I used from class

- Semantic HTML, links, images, forms and embedded YouTube videos
- The box model and CSS variables in `:root`
- Flexbox for the main layouts, cards, taskbar and responsive changes
- Relative, absolute and fixed positioning for the desktop and windows
- Hover states, transforms, transitions and a keyframe loading animation
- CSS `:target` for the About, Contact, Secret and image-preview windows
- Media queries for laptop and phone sizes
- Week 09 JavaScript arrays, `Math.random()`, `Math.floor()` and `textContent`

The JavaScript is intentionally small. It chooses one line from the `desktopNotes` array whenever the home page reloads:

```text
random decimal × array length
→ round down to a valid array index
→ put that note on the page
```

## Pages

- `index.html` is the main desktop, About window and contact form.
- `projects.html` has four project case studies, image previews and two video embeds.
- `style.css` controls the whole visual design and responsive layouts.
- `script.js` chooses the random desktop note.

## Image optimization

I resized the six images used on the site so the browser does not download the original full-size files.

| Measurement | Before | After |
| --- | ---: | ---: |
| Six page images | 4.82 MB | 0.68 MB |

The six page images are about 86% smaller in total. I also added useful alt text and width/height information to every image.

## Responsive check

I checked the layout at a 390px browser width. There was no horizontal page overflow, the windows stayed readable and all modal content could scroll. I still need to do the final check on my actual phone before submitting.

## Before I submit

- Replace the contact form's `action="#"` with my real Formspree endpoint.
- Push the repository to GitHub.
- Turn on GitHub Pages from the `main` branch.
- Add the live link at the top of this README.
- Open both pages on my phone and send one test message through the form.
