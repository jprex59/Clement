const hamburger = document.querySelector(".hamburger1");
const hamburger2 = document.querySelector(".hamburger2");
const nav = document.querySelector(".nav");
const cross1 = document.querySelector(".cross1");
const cross2 = document.querySelector(".cross2");
const topbg = document.querySelector(".top");

var a = document.querySelectorAll(".nav ul li a");

hamburger.addEventListener("click", () => {
	cross1.classList.add("cross1-active");
	cross2.classList.add("cross2-active");
	nav.classList.add("nav-active");
	hamburger.style.zIndex = "45";
	hamburger2.style.zIndex = "50";
});

hamburger2.addEventListener("click", () => {
	cross1.classList.remove("cross1-active");
	cross2.classList.remove("cross2-active");
	nav.classList.remove("nav-active");
	hamburger.style.zIndex = "50";
	hamburger2.style.zIndex = "45";
});

for (let i = 0; i < a.length; i++) {
	a[i].addEventListener("click", () => {
		cross1.classList.remove("cross1-active");
		cross2.classList.remove("cross2-active");
		nav.classList.remove("nav-active");
		hamburger.style.zIndex = "50";
		hamburger2.style.zIndex = "45";
	});
}

window.onscroll = function () {
	topbg.style.transform = "translateY(0)";
};
