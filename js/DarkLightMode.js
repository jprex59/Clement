var imgPNG = document.querySelectorAll(".imgPNG");
function themeNuitJour() {
	const date = new Date();
	const hour = date.getHours();

	console.log("hello");

	if (hour > 5 || hour < 14) {
		console.log("light");
		document.documentElement.style.setProperty("--ecriture", "#1e1e1e");
		document.documentElement.style.setProperty("--box", "#ffff");
		document.documentElement.style.setProperty("--fond", "#fffff");
	} else {
		/*Dark*/
		console.log("Dark");
		document.documentElement.style.setProperty("--ecriture", "#ffffff");
		document.documentElement.style.setProperty("--box", "#333333");
		document.documentElement.style.setProperty("--fond", "#1e1e1e");

		for (let i = 0; i < imgPNG.length; i++) {
			imgPNG[i].classList.add("imgThemeMode");
		}
	}
}
themeNuitJour();
