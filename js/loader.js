const Pageloader = document.querySelector(".pageloader");

window.addEventListener("beforeunload", () => {
	Pageloader.classList.add("is-active");
});
window.addEventListener("load", () => {
	Pageloader.classList.remove("is-active");
});
