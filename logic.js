// Disable copy, cut, and paste
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("paste", (e) => e.preventDefault());

const startModal = document.getElementById("start-modal");
const bgMusic = document.getElementById("bg-music");

// test
function hideStartModalAndPlayMusic() {
  // Hide the modal
  startModal.style.display = "none";

  // Play background music
  bgMusic.play().catch((e) => {
    console.log("Autoplay prevented, user interaction needed");
  });

  // Remove event listeners so it doesn't fire again
  startModal.removeEventListener("click", hideStartModalAndPlayMusic);
  startModal.removeEventListener("touchstart", hideStartModalAndPlayMusic);
}

// Listen for click or touch
startModal.addEventListener("click", hideStartModalAndPlayMusic);
startModal.addEventListener("touchstart", hideStartModalAndPlayMusic);

// test
function hideStartModal() {
  startModal.style.opacity = "0";
  setTimeout(() => (startModal.style.display = "none"), 1600);
}

// Listen for both click (desktop) and touch (mobile)
startModal.addEventListener("click", hideStartModal);
startModal.addEventListener("touchstart", hideStartModal);

// test
// Map portrait tags to image paths
// Grab DOM elements
const dialogueText = document.getElementById("dialogue-text");
const characterPortrait = document.getElementById("character-portrait");
const nameBox = document.getElementById("name-box");
const mainScreen = document.getElementById("main-screen");

// Factory function to update dialogue and character
function createDialogue({ text, characterImage = null, characterName = "SJ" }) {
  dialogueText.textContent = text;

  if (characterImage) {
    characterPortrait.style.backgroundImage = `url("${characterImage}")`;
  }

  if (characterName) {
    nameBox.textContent = characterName;
  }
}

// Dialogue array (your existing one)
const portraitMap = {
  neutral: "assets/guyNeutral1.png",
  sad: "assets/guySad1.png",
  happy: "assets/guyHappy1.png",
};

const dialogues = [
  {
    text: "Hello, Jiiiiin.",
    characterImage: portraitMap.neutral,
  },
  {
    text: "Ang tagal na natin ‘di nakakalabas nang ganito, no?",
    characterImage: portraitMap.neutral,
  },
  {
    text: "Alam mo naman… madalas lutang ako.",
    characterImage: portraitMap.neutral,
  },
  { text: "Pero ngayon, seryoso ako.", characterImage: portraitMap.neutral },
  { text: "Lagi kitang iniisip.", characterImage: portraitMap.sad },
  { text: "Madalas kitang nami-miss.", characterImage: portraitMap.sad },
  {
    text: "Minsan nga may makita lang akong random na bagay, ikaw agad naaalala ko.",
    characterImage: portraitMap.sad,
  },
  {
    text: "Sorry kung madalas kitang naiinis.",
    characterImage: portraitMap.sad,
  },
  {
    text: "Pero today gusto kitang mapasaya.",
    characterImage: portraitMap.neutral,
  },
  {
    text: "Sobrang thankful ako na nag-exist ka.",
    characterImage: portraitMap.happy,
  },
  {
    text: "Hindi mo siguro napapansin, pero lagi mo kong napapasaya.",
    characterImage: portraitMap.happy,
  },
  { text: "Sana ganon din ang mundo sa’yo.", characterImage: portraitMap.sad },
  { text: "Pati family mo.", characterImage: portraitMap.sad },
  {
    text: "Sama mo na mga taong nakapaligid sa’yo.",
    characterImage: portraitMap.sad,
  },
  {
    text: "Deserve mong maging masaya. Lagi.",
    characterImage: portraitMap.neutral,
  },
  { text: "Happy Valentine’s Day, Jin.", characterImage: portraitMap.happy },
];

// Keep track of which line we’re on
let currentLine = 0;

// Function to advance dialogue
function nextDialogue() {
  if (currentLine < dialogues.length) {
    createDialogue(dialogues[currentLine]);
    currentLine++;
  } else {
    console.log("End of dialogue");
    // Optional: remove click listener or trigger end screen
    mainScreen.removeEventListener("click", nextDialogue);
    mainScreen.removeEventListener("touchstart", nextDialogue);
  }
}

// Listen for click or touch anywhere on the main screen
mainScreen.addEventListener("click", nextDialogue);
mainScreen.addEventListener("touchstart", nextDialogue);

// Optionally, start with the first line already visible
