const pictures = [
    "pictures/jsFunct.png",
    "pictures/gitrepo.png"
];

const picture = document.getElementById("picture");
const shuffleButton = document.getElementById("shuffleButton");
const backButton = document.getElementById("backButton");

shuffleButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * pictures.length);
    picture.src = pictures[randomIndex];
});

backButton.addEventListener("click", function() {
    window.location.href = "index.html";
});