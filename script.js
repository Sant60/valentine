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

// Prompt for Name, Snapchat ID, and optionally Mobile Number
window.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("userName");
    let snapchatID = localStorage.getItem("snapchatID");
    let mobileNumber = localStorage.getItem("mobileNumber"); // Optional

    if (!userName || !snapchatID) {
        userName = userName || prompt("Enter your name:");
        snapchatID = snapchatID || prompt("Enter your Snapchat ID:");
        mobileNumber = mobileNumber || prompt("Enter your mobile number (optional):");

        if (userName && snapchatID) {
            localStorage.setItem("userName", userName);
            localStorage.setItem("snapchatID", snapchatID);
            if (mobileNumber) {
                localStorage.setItem("mobileNumber", mobileNumber);
            }
        }
    }
});

// Play background music when clicking "No"
document.getElementById("noBtn")?.addEventListener("click", function () {
    let audio = document.getElementById("bgMusic");
    if (audio) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
});

// Send response when clicking "Yes"
document.getElementById("yesButton")?.addEventListener("click", function () {
    let userName = localStorage.getItem("userName") || "Unknown User";
    let snapchatID = localStorage.getItem("snapchatID") || "No Snapchat ID provided";
    let mobileNumber = localStorage.getItem("mobileNumber") || "No Mobile Number provided"; // Optional

    sendResponse(userName, snapchatID, mobileNumber, "Yes");
});

// Function to send response via email or API
function sendResponse(name, snapchat, mobile, response) {
    let message = `Name: ${name}\nSnapchat ID: ${snapchat}\nMobile Number: ${mobile}\nResponse: ${response}`;

    // Option 1: Open email client
    window.location.href = `mailto:fakebadge440@gmail.com?subject=Proposal Response&body=${encodeURIComponent(message)}`;



}
