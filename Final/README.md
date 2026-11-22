BELLA.ZIP 2.0 — Final Project Proposal
Bella Li | Introduction to Web Development

View my midterm website · View my midterm code
Project idea
For my final project, I want to turn BELLA.ZIP, my retro desktop-style portfolio, into an interactive portfolio that visitors can explore like a personal computer. I will keep the visual style and the existing project case studies, but add new ways to open and manage windows, find projects, and personalize the desktop.

My midterm already has a desktop layout, CSS-only pop-up windows, a projects page, a contact form, and a small JavaScript script that displays a random note. For the final, I want visitors' actions to change the interface, and I want the project gallery to be generated from data rather than written as a fixed set of cards.
Planned features
1. Interactive desktop windows: Make the welcome, projects, and music windows respond to real buttons. Visitors can minimize a window and restore it from the taskbar. I will use JavaScript events and classList to control their visibility. The existing About and Contact pop-ups can keep their CSS :target behavior.
2. A searchable, filterable project gallery: Store project titles, categories, images, and links in an array of JavaScript objects. Visitors can type a keyword or select a category to find a project. I plan to try Vue 3, loaded through a CDN, to render and filter this part of the page while writing my own JavaScript for the window and theme controls.
3. More complete project content: Keep the existing Jadeite, One Sided, Find Me, Adopt Me, and IDORE case studies. Add a complete case study for my Voice Snake project, including a description and visual documentation. Every project card will lead to its corresponding section on the projects page.
4. A desktop theme that remembers the visitor's choice: Add a button to switch between the original blue theme and a pink theme. Save the choice with localStorage so it remains after the page is refreshed and when the visitor moves between the two pages.
5. Responsive and accessible interactions: Make the new controls usable with a keyboard and on a phone. Give buttons clear labels, keep text readable, and check that links, images, videos, and the contact form still work.
Connection to class
- Week 11: classList, user input, and localStorage for windows, search, and theme memory.
- Week 12: JavaScript objects and arrays of objects for project information.
- Earlier lessons: HTML, CSS, media queries, and GitHub Pages for the overall layout and publication.
- Framework attempt: I plan to try Vue 3 for the gallery, with my own JavaScript for the other interactions.
Bootstrap plan
I do not plan to use Bootstrap components. I will continue using my own CSS to keep the desktop interface consistent with BELLA.ZIP's visual style.
To-do list
- [ ] Create a separate final-project copy of the midterm files.
- [ ] Replace decorative window controls with accessible buttons and connect the taskbar restore buttons.
- [ ] Create a project data array and try Vue 3 for the searchable, filterable gallery.
- [ ] Add the Voice Snake case study and connect every gallery card to a complete project section.
- [ ] Build the two themes and save the selected theme with localStorage.
- [ ] Test the complete site on desktop and mobile, including keyboard navigation and existing links, videos, and contact form.
- [ ] Publish the finished final project with GitHub Pages and update this README with the final link.
Planned files
- index.html: desktop, taskbar, window controls, gallery controls, and theme button.
- projects.html: project case studies, including the new Voice Snake section, and theme button.
- style.css: visual styles, theme colors, responsive layouts, and window states.
- script.js: custom window and theme behavior; retain the existing random note.
- gallery.js (new): project objects and the Vue gallery logic.
- assets/: existing images and any new project images.
I will adjust the scope based on the instructor's feedback. The updated proposal presentation date is awaiting confirmation.
