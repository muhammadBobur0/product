
var elButton = document.querySelector(".button");
var elBoxContent = document.querySelector("body");



elButton.addEventListener("click", function(){
  elBoxContent.classList.toggle("black")
});



var lButton = document.querySelector(".button-header")
var lBoxContent = document.querySelector(".menu__link")
var eltext = document.querySelector(".link")
var elwhite = document.querySelector(".link-Pricing")
var elResources = document.querySelector(".link-Resources")
var ellogo = document.querySelector(".logo")
var ellogobg = document.querySelector(".logo-bg")
var elSign = document.querySelector(".Sign-In")
var elHero = document.querySelector(".hero__tittle__in")
var elHeroText = document.querySelector(".hero__tittle__text")

lButton.addEventListener("click", function(){
  lBoxContent.classList.toggle("text")
  eltext.classList.toggle("text")
  elwhite.classList.toggle("text")
  elResources.classList.toggle("text")
  ellogo.classList.toggle("logo-bg")
  ellogobg.classList.toggle("logo")
  ellogobg.classList.toggle("logo-bg")
  elSign.classList.toggle("text")
  elHero.classList.toggle("text")
  elHeroText.classList.toggle("text")



});
