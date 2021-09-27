var imgPNG = document.querySelectorAll(".imgPNG");
const btnJour = document.querySelector(".btn-Jour");
const btnNuit = document.querySelector(".btn-Nuit");

const date = new Date();
const hour = date.getHours();

function Jour() {
	console.log("light");
	document.documentElement.style.setProperty("--ecriture", "#1e1e1e");
	document.documentElement.style.setProperty("--box", "#ffff");
	document.documentElement.style.setProperty("--fond", "#fffff");
	for (let i = 0; i < imgPNG.length; i++) {
		imgPNG[i].classList.remove("imgThemeMode");
	}
	btnNuit.style.zIndex = "15";
	btnJour.style.zIndex = "10";
}
function Nuit() {
	/*Dark*/
	console.log("Dark");
	document.documentElement.style.setProperty("--ecriture", "#ffffff");
	document.documentElement.style.setProperty("--box", "#333333");
	document.documentElement.style.setProperty("--fond", "#1e1e1e");
	for (let i = 0; i < imgPNG.length; i++) {
		imgPNG[i].classList.add("imgThemeMode");
	}
	btnNuit.style.zIndex = "10";
	btnJour.style.zIndex = "15";
}

function themeNuitJour() {
	console.log("hello");

	/*Condition*/
	if (hour < 5 || hour > 14) {
		Jour();
	} else {
		Nuit();
	}
}
themeNuitJour();
