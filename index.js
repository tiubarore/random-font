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
  { name: "BICRODE", path: "./fonts/BICRODEPERSONALUSE.ttf" },
  { name: "Block", path: "./fonts/Block.otf" },
  { name: "Crude", path: "./fonts/Crude.otf" },
  { name: "DXRigraf", path: "./fonts/DXRigraf-SemiBold.otf" },
  { name: "Eirene", path: "./fonts/EireneSans-Regular.otf" },
  { name: "Galnoy", path: "./fonts/Galnoy-BoldDisplay.otf" },
  { name: "Gomawo", path: "./fonts/Gomawo.ttf" },
  { name: "Guminert", path: "./fonts/Guminert.ttf" },
  { name: "Harmond", path: "./fonts/Harmond-ExtBdItaExp.otf" },
  { name: "karen", path: "./fonts/karen.otf" },
  { name: "Leiko", path: "./fonts/Leiko-Regular.otf" },
  { name: "Maghfirea", path: "./fonts/Maghfirea.ttf" },
  { name: "MAK", path: "./fonts/MAK.otf" },
  { name: "Masyte", path: "./fonts/MasyteRegular.ttf" },
  { name: "Mauline", path: "./fonts/Mauline.otf" },
  { name: "Necosmic", path: "./fonts/Necosmic-PersonalUse.otf" },
  { name: "Nephilm", path: "./fonts/Nephilm.otf" },
  { name: "NIM", path: "./fonts/NIM.ttf" },
  { name: "Obrazec-2", path: "./fonts/Obrazec-2.ttf" },
  { name: "PPNeueMachina", path: "./fonts/PPNeueMachina-PlainRegular.otf" },
  { name: "snot", path: "./fonts/snot.otf" },
  { name: "Soria", path: "./fonts/Soria.ttf" },
  { name: "Trap", path: "./fonts/Trap-Regular.otf" },
  { name: "Trento", path: "./fonts/Trento.ttf" },
  { name: "Triakis", path: "./fonts/TriakisFont-Regular.otf" },
  { name: "Tropikal", path: "./fonts/Tropikal-Bold.otf" },
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
