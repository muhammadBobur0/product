
var elButton = document.querySelector(".button");
var elBoxContent = document.querySelector("body");



elButton.addEventListener("click", function(){
  elBoxContent.classList.toggle("black")
});



var lButton = document.querySelector(".button-header");
var lBoxContent = document.querySelector(".menu__link");
var eltext = document.querySelector(".link");
var elwhite = document.querySelector(".link-Pricing");
var elResources = document.querySelector(".link-Resources");
var ellogo = document.querySelector(".logo");
var ellogobg = document.querySelector(".logo-bg");
var elSign = document.querySelector(".Sign-In");
var elHero = document.querySelector(".hero__tittle__in");
var elHeroText = document.querySelector(".hero__tittle__text");
var elProductText = document.querySelector(".main__Product__text");
var elelProduct = document.querySelector(".main__Product__list");
var elProduct = document.querySelector(".main__Product__bottom");
var elSection = document.querySelector(".main__Product");
var elManagement = document.querySelector(".main__Management");
var elEasy = document.querySelector(".main__Easy");
var elStrategies = document.querySelector(".main__Strategies");
var eltable = document.querySelector(".main__table");
var elClients = document.querySelector(".Clients");
var eflogo = document.querySelector(".footer__logo");
var fflogo = document.querySelector(".footer__logo-bg");
var elfooter = document.querySelector(".footer");
var elfooter = document.querySelector(".footer");
var elBurger = document.querySelector(".burger");
var elopen = document.querySelector(".menu");






lButton.addEventListener("click", function(){
  lBoxContent.classList.toggle("text");
  eltext.classList.toggle("text");
  elwhite.classList.toggle("text");
  elResources.classList.toggle("text");
  ellogo.classList.toggle("logo-bg");
  ellogobg.classList.toggle("logo");
  ellogobg.classList.toggle("logo-bg");
  elSign.classList.toggle("text");
  elHero.classList.toggle("text");
  elHeroText.classList.toggle("text");
  elProductText.classList.toggle("text");
  elelProduct.classList.toggle("text");
  elProduct.classList.toggle("text");
  elSection.classList.toggle("Product");
  elManagement.classList.toggle("text");
  elEasy.classList.toggle("Easy");
  elStrategies.classList.toggle("text");
  eltable.classList.toggle("text");
  elClients.classList.toggle("text");
  eflogo.classList.toggle("logo-bg");
  ellogobg.classList.toggle("logo");
  fflogo.classList.toggle("logo");
  fflogo.classList.toggle("footer__logo-bg");
  elfooter.classList.toggle("text");
  elBurger.classList.toggle("text");
  elopen.classList.toggle("black")
  
});



var elNav = document.querySelector(".burger");
var elNavrev = document.querySelector(".menu");


elNav.addEventListener("click", function(){
  elNavrev.classList.toggle("open")
  
});


var elButtonx = document.querySelector(".burger-x");
var elNavre = document.querySelector(".menu");


elButtonx.addEventListener("click", function(){
elNavre.classList.toggle("open")
  
});




