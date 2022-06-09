
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
  elopen.classList.toggle("black");
  elabout.classList.toggle("text");
  
});



var elNav = document.querySelector(".burger");
var elNavrev = document.querySelector(".menu");


elNav.addEventListener("click", function(){
  elNavrev.classList.toggle("open")
  
});


var elButtonx = document.querySelector(".burger-x");
var elNavre = document.querySelector(".menu");


elButtonx.addEventListener("click", function(){
  elNavre.classList.toggle("open");
  
});



var elcolor = document.querySelector(".Table-form");
var elex = document.querySelector(".main__ENTERPRISE");
var elp = document.querySelector(".main__aboutProduct");
var eloen = document.querySelector(".menu");
var elBur = document.querySelector(".burger");
var elli = document.querySelector("main__aboutProduct");
var abfooter = document.querySelector("footer")

lButton.addEventListener("click", function(){
  
  elcolor.classList.toggle("text");
  elex.classList.toggle("textabout");
  elp.classList.toggle("text");
  eloen.classList.toggle("black");
  elBur.classList.toggle("text");
  elli.classList.toggle("text");
  abfooter.classList.toggle("text");

});



var abfooter = document.querySelector("footer")
var abfooterLogo = document.querySelector(".footer__logo")
var abFooterLogoBg = document.querySelector(".footer__logo-bg")
var abFooterLogoB = document.querySelector(".footer__logo-bg")

lButton.addEventListener("click", function(){
  abfooter.classList.toggle("text");

  abfooterLogo.classList.toggle("footer__logo-bg");
  abFooterLogoBg.classList.toggle("footer__logo");
  abFooterLogoB.classList.toggle("footer__logo-bg");

});






var elclient = document.querySelector(".client");


lButton.addEventListener("click", function(){
  
  elclient.classList.toggle("text");
  
  
});


var elAboutInput = document.querySelector(".main__about-form ");


lButton.addEventListener("click", function(){
  
  elAboutInput.classList.toggle("text");
  
  
});


var eloe = document.querySelector(".menu");
var elBur = document.querySelector(".burger");
var elclient = document.querySelector(".client");
var elwhu = document.querySelector(".main__whu");
var elWork = document.querySelector(".main__Work")
var elHave = document.querySelector(".main__have")


lButton.addEventListener("click", function(){
  
  elclient.classList.toggle("text");
  eloe.classList.toggle("black");
  elBur.classList.toggle("text");
  elclient.classList.toggle("text");
  elwhu.classList.toggle("bg");
  elWork.classList.toggle("text");
  elHave.classList.toggle("have");

  
});



var secMade =document.querySelector(".main__made")
var seclatest =document.querySelector(".main__latest")
var seccontact =document.querySelector(".main__contact")
var seccontactDiv =document.querySelector(".contact")

var elo = document.querySelector(".menu");
var elBu = document.querySelector(".burger");


lButton.addEventListener("click", function(){
  secMade.classList.toggle("text");
  seclatest.classList.toggle("text");
  seccontact.classList.toggle("text");
  seccontactDiv.classList.toggle("con");

  elo.classList.toggle("black");
  elBu.classList.toggle("text");

  
});








