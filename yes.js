window.onload = function () {
    // Play background music
    let audio = document.getElementById("bgMusic");
    if (audio) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }

    // Delay prompt by 3 seconds
    setTimeout(() => {
        takeUserInput();
    }, 1000);
};

// Function to take user input
function takeUserInput() {
    let userName = prompt("Enter your name:");
    if (!userName) return alert("You must enter a name!");

    let snapchatID = prompt("Enter your Snapchat ID:");
    if (!snapchatID) return alert("You must enter a Snapchat ID!");

    let mobileNumber;
    while (true) {
        mobileNumber = prompt("Enter your mobile number (optional, digits only):");
        if (!mobileNumber || /^[0-9]+$/.test(mobileNumber)) break; // Allow empty or valid numbers
        alert("Please enter a valid mobile number (digits only).");
    }

    // Show popup message
    showPopup("Sending response...");

    // Redirect to Gmail after 2 seconds
    setTimeout(() => {
        sendResponse(userName, snapchatID, mobileNumber || "Not provided", "Yes");
    }, 2000);
}

// Function to show popup
function showPopup(message) {
    let popup = document.createElement("div");
    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.color = "white";
    popup.style.padding = "15px 30px";
    popup.style.borderRadius = "10px";
    popup.style.fontSize = "18px";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000); // Popup disappears after 3 seconds
}

// Function to send response via Gmail
function sendResponse(name, snapchat, mobile, response) {
    let message = `Name: ${name}\nSnapchat ID: ${snapchat}\nMobile Number: ${mobile}\nResponse: ${response}`;

    // Open Gmail compose with pre-filled details
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=fakebadge440@gmail.com&su=Proposal Response&body=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        alert("💖 You just made my day! Love you! 💖");
    }, 5000); // Shows after 5 seconds
});
