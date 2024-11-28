// Ein einfacher JavaScript-Alert
alert("Willkommen auf meiner Website!");

// Dynamischer Text ändern
// document.addEventListener(DOMContentLoaded, () => {
//     const element = document.getElementById(welcome-message);
//     if (element) {
//         element.textContent = "Das ist dynamischer Text mit JavaScript!";
//     }
// });
document.getElementById("my-button").addEventListener("click", () => {
    document.getElementById("button-message").textContent = "Danke fürs Klicken!";
});
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
