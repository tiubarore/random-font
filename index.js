// Array of fonts with name and path
const fonts = [
  { name: "Apollo", path: "./fonts/APOLLO.otf" },
  { name: "Archia", path: "./fonts/archia-regular-webfont.ttf" },
  { name: "Argesta", path: "./fonts/argestadisplay-regular-webfont.eot" },
  { name: "Aspekta", path: "./fonts/Aspekta-300.otf" },
  { name: "Attena", path: "./fonts/Attena.otf" },
  { name: "Canicule", path: "./fonts/CaniculeDisplayv0.1-Regular.Trial.ttf" },
  { name: "Evafiya", path: "./fonts/Evafiya.ttf" },
  { name: "Larken", path: "./fonts/LarkenDEMO-Regular.otf" },
  { name: "Roashe", path: "./fonts/RoashePersonalUse.otf" },
  { name: "Sugar Magic", path: "./fonts/sugarmagicpersonaluseonly-jemyo.otf" },
  { name: "Viola", path: "./fonts/VIOLA.ttf" },
];

// Get the button and font display elements
const btn = document.getElementById("btn");
const font = document.getElementById("font");

function getRandomFont() {
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  font.innerHTML = randomFont.name;
  font.style.fontFamily = randomFont.name;

  // Dynamically load the font using @font-face in CSS
  const style = document.createElement("style");
  style.innerHTML = `
    @font-face {
      font-family: '${randomFont.name}';
      src: url('${randomFont.path}');
    }
  `;
  document.head.appendChild(style); // Add font-face to the document
}

btn.addEventListener("click", getRandomFont);
