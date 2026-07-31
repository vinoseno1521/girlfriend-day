const button = document.getElementById("beginButton");
const welcome = document.getElementById("welcome");
const loadingScreen =
    document.getElementById("loadingScreen");
const message = document.getElementById("message");
const typingText = document.getElementById("typingText");
const continueButton = document.getElementById("continueButton");
const chapterTwo = document.getElementById("chapterTwo");
const backgroundMusic = document.getElementById("backgroundMusic");

const text =
    "Vanakkam Babygirl 🤍\n\n" +
    "I know I could have just bought you something...\n\n" +
    "ana I wanted to create something for you, myself.\n\n" +
    "Something that shows how special you are to me ❤️";

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeWriter, 45);
    } else {
        continueButton.classList.remove("hidden");
    }
}
window.addEventListener("load", function () {

    // Lotus starts blooming
    setTimeout(function () {
        loadingScreen.classList.add("bloom");
    }, 1500);

    // Keep it on screen longer
    setTimeout(function () {
        loadingScreen.classList.add("hide");
    }, 5500);

});

button.addEventListener("click", async function () {

    button.classList.add("button-pressed");
    button.disabled = true;

    if (backgroundMusic) {
        try {
            backgroundMusic.currentTime = 0;
            backgroundMusic.volume = 0.25;

            await backgroundMusic.play();

            console.log("Audio started successfully");
        } catch (error) {
            console.error("Audio could not start:", error);
        }
    } else {
        console.error("backgroundMusic element was not found");
    }

    setTimeout(function () {

    welcome.style.animation = "fadeOut 0.8s forwards";

}, 220);

    setTimeout(function () {
        welcome.style.display = "none";
        message.classList.remove("hidden");

        typingText.textContent = "";
        index = 0;

        setTimeout(typeWriter, 900);
    }, 1020);
});
continueButton.addEventListener("click", function () {
    message.style.animation = "fadeOut 0.8s forwards";

    setTimeout(function () {
        message.style.display = "none";
        chapterTwo.classList.remove("hidden");
    }, 800);
});
const reasonsSection = document.getElementById("reasonsSection");
const reasonText = document.getElementById("reasonText");
const reasonCounter = document.getElementById("reasonCounter");
const nextReasonButton = document.getElementById("nextReasonButton");
const memoriesButton = document.getElementById("memoriesButton");

const reasons = [
    "Because your smile can make even an ordinary day feel special.",
    "Because you care deeply, even when you try not to show it.",
    "Because talking to you feels like home.",
    "Because you make me want to become a better version of myself.",
    "Because even the smallest moments with you mean so much to me.",
    "And most importantly, because you are simply you — and that is more than enough for me. 🤍"
];

let reasonIndex = 0;

reasonsButton.addEventListener("click", function () {
    chapterTwo.style.animation = "fadeOut 0.8s forwards";

    setTimeout(function () {
        chapterTwo.style.display = "none";
        reasonsSection.classList.remove("hidden");
    }, 800);
});

nextReasonButton.addEventListener("click", function () {
    reasonText.classList.add("changing");

    setTimeout(function () {
        reasonText.textContent = reasons[reasonIndex];

        reasonIndex++;

        reasonCounter.textContent =
            reasonIndex + " / " + reasons.length;

        reasonText.classList.remove("changing");

        if (reasonIndex === reasons.length) {
            nextReasonButton.style.display = "none";
            memoriesButton.classList.remove("hidden");
        }
    }, 350);
});
const memoriesSection = document.getElementById("memoriesSection");
const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const memoryCounter = document.getElementById("memoryCounter");

const previousMemoryButton =
    document.getElementById("previousMemoryButton");

const nextMemoryButton =
    document.getElementById("nextMemoryButton");

const finalSectionButton =
    document.getElementById("finalSectionButton");

const memories = [
    {
        image: "Images/memories/memory3.jpg",
        caption: "You somehow make even ordinary days feel special."
    },
    {
        image: "Images/memories/memory2.jpg",
        caption: "A moment I wish I could experience all over again."
    },
    {
        image: "Images/memories/memory1.jpg",
        caption: "One of my favourite moments with you."
    },
    {
        image: "Images/memories/memory4.jpg",
        caption: "And this is only the beginning of all the memories still waiting for us. 🤍"
    }
];

let memoryIndex = 0;

function updateMemory() {
    memoryImage.classList.add("changing");

    setTimeout(function () {
        memoryImage.src = memories[memoryIndex].image;
        memoryCaption.textContent = memories[memoryIndex].caption;

        memoryCounter.textContent =
            memoryIndex + 1 + " / " + memories.length;

        memoryImage.classList.remove("changing");

        if (memoryIndex === memories.length - 1) {
            finalSectionButton.classList.remove("hidden");
        }
    }, 400);
}

memoriesButton.addEventListener("click", function () {
    reasonsSection.style.animation = "fadeOut 0.8s forwards";

    setTimeout(function () {
        reasonsSection.style.display = "none";
        memoriesSection.classList.remove("hidden");
    }, 800);
});

nextMemoryButton.addEventListener("click", function () {
    memoryIndex++;

    if (memoryIndex >= memories.length) {
        memoryIndex = 0;
    }

    updateMemory();
});

previousMemoryButton.addEventListener("click", function () {
    memoryIndex--;

    if (memoryIndex < 0) {
        memoryIndex = memories.length - 1;
    }

    updateMemory();
});
const finalSection = document.getElementById("finalSection");
const finalEffects = document.getElementById("finalEffects");

function createFinalEffects() {
    finalEffects.innerHTML = "";

    const petals = [
    "🤍",
    "🌸",
    "🪷",
    "❀",
    "❁"
];

    function spawnPetal() {



    const petal = document.createElement("span");

    petal.classList.add("falling-petal");

    petal.textContent =
        petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = -(Math.random() * 150) + "px";

    petal.style.fontSize =
    (0.65 + Math.random() * 0.9) + "rem";
    petal.style.opacity =
    0.45 + Math.random() * 0.45;

    const duration = 7 + Math.random() * 5;

    petal.style.animationDuration =
        duration + "s";



petal.style.animationTimingFunction = "linear";

    finalEffects.appendChild(petal);

    // Remove it after it falls
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

    for (let i = 0; i < 28; i++) {
        const sparkle = document.createElement("span");

        sparkle.classList.add("final-spark");

        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";

        sparkle.style.animationDelay =
            Math.random() * 3 + "s";

        sparkle.style.animationDuration =
            1.8 + Math.random() * 2.5 + "s";

        finalEffects.appendChild(sparkle);
    }
   // Spawn a few petals immediately
for (let i = 0; i < 4; i++) {
    setTimeout(spawnPetal, i * 350);
}

// Continue spawning forever at random intervals
function startPetals() {
    spawnPetal();

  setTimeout(startPetals, 450 + Math.random() * 650);
}

startPetals();
}
finalSectionButton.addEventListener("click", function () {
    memoriesSection.style.animation = "fadeOut 0.8s forwards";

    setTimeout(function () {
        memoriesSection.style.display = "none";
        finalSection.classList.remove("hidden");

        createFinalEffects();
       
    }, 800);
});