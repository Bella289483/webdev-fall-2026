// Week 09: show a different little note every time the page reloads.
const desktopNotes = [
  '🪐 good ideas, strange days, and changing hair colors',
  '☆ currently making something a little weird',
  '♡ made with too many tabs open',
  '✦ welcome to my corner of the internet',
]

function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length)
  return list[index]
}

const randomNote = pickRandom(desktopNotes)
document.querySelector('#random-note').textContent = randomNote
