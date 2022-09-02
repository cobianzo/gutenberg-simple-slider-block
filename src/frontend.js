// alert("frontned");
// import './frontend.scss';

import Splide from "@splidejs/splide";

import "../node_modules/@splidejs/splide/dist/css/splide.min.css";

//import "@glidejs/glide/src/assets/sass/glide.core";
console.log("splide librery loaded", Splide);

if (document.querySelector(".splide")) {
	var splide = new Splide(".splide", {
		type: "slide",
		perPage: 4,
		perMove: 1,
	});

	splide.mount();
}
