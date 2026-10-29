# BELLA.ZIP

Midterm project for Web Development.

**Live site:** add my GitHub Pages link here before presentation.

## Concept

BELLA.ZIP is my personal portfolio designed like an old desktop computer. I wanted the navigation to feel like looking through somebody's personal files instead of reading a normal portfolio page.

The colors and photo will change with different hair-color chapters as I continue the project.

## Class concepts I used

- Semantic HTML for the navigation, main content, sections and footer
- CSS variables for the main color palette
- Flexbox for the Welcome layout, project cards and taskbar
- Relative and absolute positioning for the desktop windows
- Hover, transform and transition on icons and project images
- A CSS-only modal using the `:target` selector
- A contact form with labels, inputs and a textarea
- A `max-width: 768px` media query for the phone layout

## Folder structure

```text
bella-zip/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── background-no-bnd.png
    └── bella-profile.png
```

## Assets

### background-no-bnd.png
Actual desktop wallpaper.

### bella-profile.png
My portrait used in the Welcome window. It is displayed at a 4:5 ratio with `object-fit: cover`.

## Course constraint

The current version is built with HTML and CSS. The popups use `:target`, so JavaScript is not required yet. My next steps are connecting the contact form to Formspree and replacing the placeholder project descriptions with my finished work.
