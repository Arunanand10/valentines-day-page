function showSurprise() {
    let surpriseDiv = document.getElementById("surprise");

    if (surpriseDiv) {
        // Ensure it's visible
        surpriseDiv.style.display = "block";
        surpriseDiv.classList.remove("hidden");

        // Smooth fade-in effect
        surpriseDiv.style.opacity = "0";
        setTimeout(() => {
            surpriseDiv.style.opacity = "1";
            surpriseDiv.style.transition = "opacity 1s ease-in-out";
        }, 100);

        alert("I love you more than words can say! 💕");
    } else {
        console.error("Surprise div not found!");
    }
}
