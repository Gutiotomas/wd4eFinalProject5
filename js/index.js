function setImages() {
    const options = ["lemur.jpg", "penguin.jpg", "bear.jpg", "seal.jpg", "walrus.jpg", "peacock.jpg"];
    const currentImages = document.querySelectorAll("img");
    const availableOptions = [...options];

    for (var i = 0; i < currentImages.length; i++) {
        if (availableOptions.length === 0) {
            console.log("No more unique images available");
            break;
        }
        const randomIndex = Math.floor(Math.random() * availableOptions.length);
        const randomImg = "images/" + availableOptions[randomIndex];
        currentImages[i].src = randomImg;
        currentImages[i].setAttribute("tabindex", "0");
        
        availableOptions.splice(randomIndex, 1);
    }
}
function displayDate()
{
    document.getElementById("demo").innerHTML = Date();
}
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};
window.addEventListener('load', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
    element.classList.add('visible');
    });
});