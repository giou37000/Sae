function loveResponse() {
    let hearts = document.createElement("div");
    hearts.className = "hearts";
    hearts.innerHTML = "💖😍💞😘💖😍💞😘💖😍💞😘💖😍💞😘";
    document.body.appendChild(hearts);

    // Supprime les cœurs après 3 secondes
    setTimeout(() => hearts.remove(), 3000);
}

function moveNoButton() {
    let noButton = document.getElementById("no");
    let image = document.querySelector(".image-container");

    let maxX = window.innerWidth - noButton.clientWidth;
    let maxY = image.offsetTop - noButton.clientHeight - 20;

    // Empêche le bouton de sortir de l'écran
    let x = Math.max(10, Math.random() * maxX);
    let y = Math.max(10, Math.random() * maxY);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
