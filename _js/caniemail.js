---
layout: null
permalink: "/assets/js/caniemail.js"
---
{% include_relative _search.js %}
{% include_relative _settings.js %}
{% include_relative _filters.js %}
{% include_relative _options.js %}

class Caniemail {

	constructor() {
		this.search = new Search();
		this.settings = new Settings();
		this.filters = new Filters();
		this.accessibleColors = new Options('.a11y-colors-button', 'accessible-colors-enabled');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window['caniemail'] = new Caniemail();
});