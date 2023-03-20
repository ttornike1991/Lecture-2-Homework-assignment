function isAtEdge(element) {
  const scrollIntoViewOptions = {'block': 'center', 'inline': 'center'};
  const initialScrollY = window.scrollY;
  element.scrollIntoView(scrollIntoViewOptions);
  const rect = element.getBoundingClientRect();
  window.scrollTo(0, initialScrollY);
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  return (
    rect.left <= 10 ||
    rect.top <= 10 ||
    rect.right >= viewportWidth - 10 ||
    rect.bottom >= viewportHeight - 10
  );
}

const box1 = document.querySelector(".back");
const box2 = document.querySelector(".back2");
const box3 = document.querySelector(".back3");
function playSoundIfAtEdge(element, sound) {
  if (!element) {
    return;
  }

  let random = Math.floor(Math.random() * 21);
  let color = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ffffff",
  ];

  if (isAtEdge(element)) {
    const clonedSound = sound.cloneNode(true);
    clonedSound.volume = 0.1;
    clonedSound.play();
    box1.style.backgroundColor = `${color[random]}`;
    box2.style.backgroundColor = `${color[random]}`;
    box3.style.backgroundColor = `${color[random]}`;
  }
}

const sound = document.getElementById("sound");
const img1 = document.querySelector(".smaller-img1");
const img2 = document.querySelector(".smaller-img2");
const img3 = document.querySelector(".smaller-img3");

sound.volume = 0.1;

function checkAndPlaySound() {
  playSoundIfAtEdge(img1, sound);
  playSoundIfAtEdge(img2, sound);
  playSoundIfAtEdge(img3, sound);
}

setInterval(checkAndPlaySound, 520);
 
 