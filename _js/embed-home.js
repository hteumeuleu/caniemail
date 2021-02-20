---
layout: null
permalink: "/assets/js/embed-home.js"
---
{% include_relative _generator.js %}

class Caniemail {

	constructor() {
		this.generator = new Generator();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.caniemail = new Caniemail();
});