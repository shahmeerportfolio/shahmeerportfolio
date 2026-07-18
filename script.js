console.log("Website Loaded Successfully!");

alert("Welcome to Shahmeer Portfolio!");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alert("Welcome to Shahmeer Portfolio!");
});

console.log("Shahmeer Portfolio Loaded Successfully!");

document.querySelector("button").addEventListener("click", function(){
    alert("Welcome to Shahmeer Portfolio!");
});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});

const images = [
    "images/bmw.jpg",
    "images/levis.jpg",
    "images/ethnic.jpg",
    "images/shangrila.jpg"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= images.length){
        current = 0;
    }

    document.getElementById("slide").src = images[current];

},3000);

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌞 Light Mode";
    }else{
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});


setTimeout(function(){

document.getElementById("popup").style.display="flex";

},5000);

function closePopup(){

document.getElementById("popup").style.display="none";

}

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const hiddenElements = document.querySelectorAll(
  ".about, .portfolio, .services, .gallery, .skills, .testimonials, .stats, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const text = "AI Brand Designer & Website Developer";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}

window.onload = function () {
    typingEffect();
};