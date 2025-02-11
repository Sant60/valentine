// Function to move an element randomly
function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Move "No" button randomly on hover/touch
const moveRandom = document.querySelector("#move-Random");

if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });

    moveRandom.addEventListener("touchstart", function (e) {
        e.preventDefault(); // Prevent unintended scrolling
        moveRandomEl(e.target);
    });
}

// Function to play background music
function playMusic() {
    let audio = document.getElementById("bgMusic");
    if (audio) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
}

// Play background music when clicking "No"
document.getElementById("noBtn")?.addEventListener("click", playMusic);

// Redirect to yes.html when "Yes" is clicked
document.getElementById("yesButton")?.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "yes.html";
});
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
