# CODEX INSTRUCTIONS — BELLA.ZIP

I am building a Web Development class project: an interactive personal website called **BELLA.ZIP**.

Please inspect the files in this project before changing anything.

## Provided assets

Inside `assets/`:

1. `reference-bella-zip.png`
   - Full visual reference / target mockup.
   - Recreate the website closely based on this image.
   - Do **not** use the entire image as one background.

2. `background-no-bnd.png`
   - Use this as the actual desktop wallpaper.

3. `bella-character.png`
   - Pre-cropped character image for the main BELLA.ZIP window.
   - Do not stretch, squeeze, or distort it.
   - Preserve its original aspect ratio.
   - Prefer `height: auto` and/or `object-fit: contain`.

4. `source-character-original.jpg`
   - Original character source for reference only.

---

# PHASE 1 — STATIC VISUAL LAYOUT FIRST

Please start with the static layout only.

## Technical requirements

- Use only vanilla HTML, CSS, and JavaScript.
- Do NOT use React.
- Do NOT use Vue.
- Do NOT use Tailwind.
- Do NOT use Three.js.
- Do NOT use Bootstrap.
- Do NOT use GSAP.
- Do not add a framework unless I explicitly ask later.
- Keep the code beginner-friendly and readable.
- Add helpful comments.
- Keep the project separated into `index.html`, `style.css`, `script.js`, and `assets/`.

This is a Web Development class project, so I need to understand and explain the code.

## Very important implementation rule

Do not flatten the full mockup into one image. Build these with real HTML/CSS:

- desktop
- desktop icons
- icon labels
- windows
- title bars
- close/minimize-style buttons
- taskbar
- text
- folders
- menus
- buttons
- progress window
- popup dialog

Use image files only for visual assets such as wallpaper, character, artwork, photos, decorative stickers, or textures.

---

# VISUAL DIRECTION

The page should feel like a retro 1990s / early-2000s desktop computer interface.

Overall feeling:

- webcore
- nostalgic internet
- personal homepage
- digital scrapbook
- slightly strange
- playful
- cute but not overly polished
- like exploring someone's old computer

The site is fully 2D. Do not build 3D graphics.

## Wallpaper

Use `assets/background-no-bnd.png` as the desktop wallpaper and keep it visible behind the interface.

## Main window

Create one large main window titled:

`welcome to BELLA.ZIP`

Inside it include:

- `bella-character.png` on the left
- large `BELLA.ZIP` title
- short personal introduction
- simple folder/menu links
- small retro/webcore decorative details

Character rule:

```css
.bella-character {
  width: 220px;
  height: auto;
  object-fit: contain;
}
```

The exact width may change, but the aspect ratio must stay intact.

---

# DESKTOP ICONS

Include these desktop icons / labels:

- PROJECTS
- ABOUT_ME
- FILMS
- SECRET.TXT
- DO_NOT_OPEN
- TRASH

For Phase 1 they can remain static. Use simple retro icons, CSS shapes, emoji placeholders, or small self-made icon elements if needed. Do not spend time adding a complicated icon library.

---

# WINDOWS TO INCLUDE

## 1. Main window
Title: `welcome to BELLA.ZIP`

## 2. Project window
Title: `my_projects.exe`

Include three simple project preview slots. Placeholders are fine initially. Suggested labels:

- `01. web dreams`
- `02. short films`
- `03. misc.`

## 3. Music window
Title: `now_playing...`

It can visually look like a tiny retro music player. No functional audio is required in Phase 1.

## 4. Secret progress window
Title: `secrets.exe`

Text: `discovered 0/5` or `discovered 1/5`

Use a small segmented progress bar.

## 5. Small popup
Title: `note.txt`

Text: `you found a secret :)`

Button: `OK`

---

# TASKBAR

Create a retro taskbar at the bottom with:

- a Start-style button
- open-window-looking tabs
- a small clock / tray area

Do not reproduce a specific operating system perfectly. Make it an original retro-computer-inspired interface.

---

# SCREEN / LAYOUT REQUIREMENTS

This project is primarily designed for desktop/laptop screens.

You do NOT need to create a complicated mobile redesign.

However:

- keep the desktop centered
- prevent major layout breakage
- use reasonable relative sizing
- keep windows readable on common laptop sizes
- avoid relying on exactly one monitor resolution
- absolute positioning is acceptable because the concept is a desktop

---

# FIRST PASS GOAL

The first pass should focus on:

1. matching the overall composition of `reference-bella-zip.png`
2. getting the wallpaper correct
3. getting the main BELLA.ZIP window correct
4. getting desktop icons in place
5. getting the secondary windows in place
6. recreating the retro blue-window visual language
7. keeping the code simple enough for a student to understand

Do not add complicated animations or game mechanics yet.

Before coding, briefly explain the structure you plan to create. Then implement it.

After implementation, summarize:

- what was added to HTML
- what was added to CSS
- what JavaScript is currently doing
- which parts I should learn to explain in class

---

# PHASE 2 — INTERACTIONS

Do NOT start this phase until the static layout looks good.

When I ask for Phase 2, add simple vanilla-JavaScript interactions:

1. Double-clicking `PROJECTS` opens the project window.
2. Double-clicking `ABOUT_ME` opens an About Me window.
3. Clicking the red X closes a window.
4. Windows can be dragged using their blue title bars.
5. Clicking `SECRET.TXT` opens a popup saying `you found a secret :)`.
6. Track discovered secrets.
7. `DO_NOT_OPEN` uses a three-click sequence:
   - first click: `are you sure?`
   - second click: `I told you not to open this.`
   - third click: open the secret content
8. Keep all JavaScript beginner-friendly.
9. Add comments explaining the logic.

Do not redesign the page during Phase 2.

---

# PHASE 3 — DISCOVERY GAME / CHAOS MODE

Only after Phase 2 is stable, add 5 discoverable secrets.

Display:

`DISCOVERED: 0/5`

Each secret counts only once.

When the user reaches 5/5, show:

`CHAOS MODE UNLOCKED`

and a button:

`ENTER CHAOS MODE`

Chaos Mode should stay simple and mostly CSS-based. Possible effects:

- stars rotate slowly
- a few windows tilt slightly
- hidden text appears
- cursor changes
- subtle wallpaper/filter change

Do not add advanced libraries.

---

# EXPERIENCE GOAL

This should not feel like a normal `About / Projects / Contact` portfolio.

The user should feel like they are snooping around Bella's old computer. The website should reward curiosity. The interaction model should feel like a simple 2D point-and-click game while remaining technically manageable for a beginner Web Development class.

Guiding idea:

**You are not visiting my portfolio. You are snooping through my computer.**
