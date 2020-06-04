---
layout: null
permalink: "/assets/js/embed.js"
---
{% include_relative _options.js %}

class Caniemail {

	constructor() {
		this.accessibleColors = new Options('.a11y-colors-button', 'accessible-colors-enabled');
		this.switchLayout = new Options('.switch-layout-button', 'alternate-layout-enabled');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.caniemail = new Caniemail();
});