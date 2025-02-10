<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

(function () {
    emailjs.init("m5Ks8FQ9j9ccV1x5C"); // Replace with your EmailJS User ID
})();

document.getElementById("yesButton").addEventListener("click", function () {
    emailjs.send("service_29jj0uc", "template_stnohvr", {
        to_name: "Santosh",
        message: "She said YES! ❤️🎉",
        email: "fakebadge440@gmail.com"
    }).then(function (response) {
        alert("You’ll get an email notification! 📩");
    }, function (error) {
        alert("Oops, something went wrong. 😢");
    });
});