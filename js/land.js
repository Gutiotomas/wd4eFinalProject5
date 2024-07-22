function pickImage(){
    options = ["hippopotamus.jpg", "zebra.jpg", "cow.jpg"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img")
    img.setAttribute("src", randomImg)
    img.setAttribute("alt", "")
    img.setAttribute("tabindex", "0")
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