const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const navLinks = document.querySelector(".navLinks");
const headline = document.querySelector(".headline");
const action = document.querySelector(".action");

const tl = new TimelineMax();


tl.fromTo(hero,1, {height: "0%"},{height: "50%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "100%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, { opacity:0, x: 30}, {opacity: 1, x:0},"-=0.5")
.fromTo(navLinks, 0.5, { opacity:0, x: 30}, {opacity: 1, x:0},"-=0.5")
.fromTo(headline, 0.5, { opacity:0, x: 30}, {opacity: 1, x:0},"-=0.5")
.fromTo(action, 0.5, { opacity:0, x: 30}, {opacity: 1, x:0},"-=0.5");