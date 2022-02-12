var head = document.getElementsByClassName("picture")[0];
var starter = document.getElementById("starter");
var menu = document.getElementsByClassName("menu")[0];
var spacer = document.getElementById("spacer");
var header = document.getElementsByClassName("header")[0];
var nav = document.getElementById("nav");
var mains = document.getElementById("mains");
var films = document.getElementById("films");
var series = document.getElementById("series");
var cartoons = document.getElementById("cartoons");
var main = document.getElementById("main");
var film = document.getElementById("film");
var serie = document.getElementById("serie");
var cartoon = document.getElementById("cartoon");
var about = document.getElementById("about");
var abouts = document.getElementById("abouts");
starter.addEventListener('click',
function(){
	header.classList.toggle("active");
	spacer.classList.toggle("active");
    head.classList.toggle("active");
    starter.classList.toggle("display");
	mains.classList.toggle("active");
	menu.classList.toggle("active");
})
menu.addEventListener('click',
function(){
	nav.classList.toggle("active");
})
main.addEventListener('click',
function(){
    nav.classList.remove("active");
	mains.classList.toggle("active");
	films.classList.remove("active");
	cartoons.classList.remove("active");
	series.classList.remove("active");
	abouts.classList.remove("active");
})
film.addEventListener('click',
function(){
    nav.classList.remove("active");
	mains.classList.remove("active");
	films.classList.toggle("active");
	cartoons.classList.remove("active");
	series.classList.remove("active");
	abouts.classList.remove("active");
})
cartoon.addEventListener('click',
function(){
    nav.classList.remove("active");
	mains.classList.remove("active");
	films.classList.remove("active");
	cartoons.classList.toggle("active");
	series.classList.remove("active");
	abouts.classList.remove("active");
})
serie.addEventListener('click',
function(){
    nav.classList.remove("active");
	mains.classList.remove("active");
	films.classList.remove("active");
	cartoons.classList.remove("active");
	series.classList.toggle("active");
	abouts.classList.remove("active");
})
about.addEventListener('click',
function(){
    nav.classList.remove("active");
	mains.classList.remove("active");
	films.classList.remove("active");
	cartoons.classList.remove("active");
	series.classList.remove("active");
    abouts.classList.toggle("active");
})