const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    window.location.href = "pictures.html";
});

const pictures = [
    "pictures/jsFunct.png",
    "pictures/gitrepo.png",

];

const picture = document.getElementById("picture");
const shuffleButton = document.getElementById("shuffleButton");

shuffleButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * pictures.length);
    picture.src = pictures[randomIndex];
});