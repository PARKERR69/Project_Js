const lamp = document.getElementById("lamp");
const lampSwitch = document.getElementById("lamp-switch");

lampSwitch.addEventListener("click", () => {
    if (lamp.src.includes("off")) {
        lamp.src = "on.jpg";
        lampSwitch.textContent = "Éteindre";
    } else {
        lamp.src = "off.jpg";
        lampSwitch.textContent = "Allumer";
    }
    playSound(lampSwitch.dataset.sound);
});

function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}