const input = document.querySelector('input[type="text"]');
const placeholder = input.getAttribute('placeholder');
input.style.width = `${placeholder.length}ch`;


const homeButton = document.getElementById("home-button");
const accommodationButton = document.getElementById("accommodation-button");
const gastronomyButton = document.getElementById("gastronomy-button");
const experiencesButton = document.getElementById("experiences-button");

const buttons = [homeButton, accommodationButton, gastronomyButton, experiencesButton];


document.addEventListener("DOMContentLoaded", function() {
    homeButton.style.fontSize = "1.6vw";
    homeButton.style.fontWeight = "bolder";
});

buttons.forEach(button => {
  button.addEventListener("click", event => {
    buttons.forEach(b => {
      b.style.fontSize = "1.4vw";
      b.style.fontWeight = "lighter";
    });
    event.target.style.fontSize = "1.6vw";
    event.target.style.fontWeight = "bolder";
  });
});

