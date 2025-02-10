function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-Random");

if (moveRandom) {
    // Event for desktop
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });

    // Event for mobile
    moveRandom.addEventListener("touchstart", function (e) {
        e.preventDefault(); // Prevents unintended scrolling
        moveRandomEl(e.target);
    });
}

// Background music when clicking "No"
document.getElementById("noBtn").addEventListener("click", function () {
    let audio = document.getElementById("bgMusic");
    if (audio) {
        audio.play();
    }
});
