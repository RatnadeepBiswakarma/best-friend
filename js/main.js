const cover = document.getElementById("home");
const btn = document.getElementById("button");
const card = document.getElementById("main");
btn.addEventListener("click", function() {
cover.classList.add("slideOutDown");
setTimeout(() => {
    cover.style.display = "none";
    card.style.display = "block";
}, 500);
});