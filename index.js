// Array of fonts with name and path
const fonts = [
  { name: "Apollo", path: "./fonts/APOLLO.otf" },
  { name: "Archia", path: "./fonts/archia-regular-webfont.ttf" },
  { name: "Aspekta", path: "./fonts/Aspekta-300.otf" },
  { name: "Attena", path: "./fonts/Attena.otf" },
  { name: "Canicule", path: "./fonts/CaniculeDisplayv0.1-Regular.Trial.ttf" },
  { name: "Evafiya", path: "./fonts/Evafiya.ttf" },
  { name: "Larken", path: "./fonts/LarkenDEMO-Regular.otf" },
  { name: "Roashe", path: "./fonts/RoashePersonalUse.otf" },
  { name: "Sugar", path: "./fonts/sugarmagicpersonaluseonly-jemyo.otf" },
  { name: "Viola", path: "./fonts/VIOLA.ttf" },
  { name: "BICRODE", path: "./fonts/BICRODEPERSONALUSE.ttf" },
  { name: "Block", path: "./fonts/Block.otf" },
  { name: "Crude", path: "./fonts/Crude.otf" },
  { name: "DXRigraf", path: "./fonts/DXRigraf-SemiBold.otf" },
  { name: "Eirene", path: "./fonts/EireneSans-Regular.otf" },
  { name: "Galnoy", path: "./fonts/Galnoy-BoldDisplay.otf" },
  { name: "Gomawo", path: "./fonts/Gomawo.ttf" },
  { name: "Guminert", path: "./fonts/Guminert.ttf" },
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
  { name: "snot", path: "./fonts/snot.otf" },
  { name: "Soria", path: "./fonts/Soria.ttf" },
  { name: "Trap", path: "./fonts/Trap-Regular.otf" },
  { name: "Triakis", path: "./fonts/TriakisFont-Regular.otf" },
  { name: "Tropikal", path: "./fonts/Tropikal-Bold.otf" },
  { name: "Arc", path: "./fonts/Arc.otf" },
  { name: "Belkis", path: "./fonts/Belkis-Regular.otf" },
  { name: "NeueMachina", path: "./fonts/PPNeueMachina-PlainRegular.otf" },
  { name: "Ortland", path: "./fonts/Ortland.ttf" },
  { name: "Terano", path: "./fonts/Terano-Regular.otf" },
  { name: "Porao", path: "./fonts/Porao-Regular.otf" },
  { name: "Nebula", path: "./fonts/Nebula-Regular.otf" },
  { name: "PlanetKosmos", path: "./fonts/PLANK___.TTF" },
  { name: "Pissjar", path: "./fonts/PissjarSans.ttf" },
  { name: "CROWNED", path: "./fonts/CROWNEDPERSONALUSE.ttf" },
  { name: "M290", path: "./fonts/M290.ttf" },
  { name: "DASH", path: "./fonts/DASH-Early.otf" },
  { name: "Anvha", path: "./fonts/Anvha.ttf" },
  { name: "Baunk", path: "./fonts/Baunk.ttf" },
  { name: "Heming", path: "./fonts/Heming.ttf" },
  { name: "Mersad", path: "./fonts/MersadRegular.ttf" },
  { name: "Efesto", path: "./fonts/Efesto.otf" },
  { name: "GREY", path: "./fonts/GREY.ttf" },
  { name: "Hyrbo", path: "./fonts/Hyrbo-Bold.otf" },
  { name: "Kitchen Sink", path: "./fonts/KitchenSink.otf" },
  { name: "Maragsa", path: "./fonts/Maragsa╠é-Display.otf" },
  { name: "odale", path: "./fonts/odale.otf" },
  { name: "Cirka", path: "./fonts/PPCirka-Light.otf" },
  { name: "Hatton", path: "./fonts/PPHatton-Medium.otf" },
  { name: "Telegraf", path: "./fonts/PPTelegraf-Regular.otf" },
  { name: "scotland", path: "./fonts/scotland.otf" },
  { name: "Think", path: "./fonts/Think.ttf" },
];

const btn = document.getElementById("btn");
const font = document.getElementById("font");

// Preload fonts by adding them to the document on page load
fonts.forEach((font) => {
  const preload = document.createElement("link");
  preload.href = font.path;
  preload.rel = "preload";
  preload.as = "font";
  preload.type = font.path.endsWith(".ttf") ? "font/ttf" : "font/otf";
  document.head.appendChild(preload);
});

function getRandomFont() {
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  font.innerHTML = randomFont.name;

  const fontFace = new FontFace(randomFont.name, `url(${randomFont.path})`);
  fontFace
    .load()
    .then((loadedFontFace) => {
      document.fonts.add(loadedFontFace);
      font.style.fontFamily = randomFont.name;
    })
    .catch((error) => {
      console.error(`Failed to load font: ${randomFont.name}`, error);
    });

  /*
  // modify font size if too big on mobile
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    // Current device is a mobile device
    if (
      (randomFont.name === "snot") |
      (randomFont.name === "Baunk") |
        (randomFont.name === "karen") |
        (randomFont.name === "Eirene"))
     {
      btn.style.marginRight = "50px";
    }
  }*/

  if (randomFont.name === "BICRODE") {
    font.style.fontSize = "3rem"; //3rem
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "Necosmic") {
    font.style.fontSize = "3rem"; //3
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "NeueMachina") {
    font.style.fontSize = "3rem"; //3
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "CheerfulHump") {
    font.style.fontSize = "3.5rem"; //3.5
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "Terano") {
    font.style.fontSize = "2rem"; //2
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "Nebula") {
    font.style.fontSize = "3rem"; //3
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "CROWNED") {
    font.style.fontSize = "2.75rem"; //2.75
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "PlanetKosmos") {
    font.style.fontSize = "2rem"; //2
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "Baunk") {
    font.style.fontSize = "3rem"; //3
    btn.style.marginLeft = "50px";
  } else if (randomFont.name === "Crude") {
    font.style.fontSize = "4rem"; //3
    btn.style.marginLeft = "50px";
  } else {
    font.style.fontSize = "5rem"; //5
  }
}

btn.addEventListener("click", getRandomFont);
