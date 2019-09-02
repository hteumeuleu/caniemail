---
layout: null
---
{% include_relative _search.js %}
{% include_relative _accessible-colors.js %}

class Caniemail {

	constructor() {
		this.search = new Search();
		this.accessibleColors = new AccessibleColors();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window['caniemail'] = new Caniemail();
});