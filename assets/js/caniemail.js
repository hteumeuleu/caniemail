---
layout: null
---
{% include_relative _search.js %}
{% include_relative _settings.js %}
{% include_relative _options.js %}

class Caniemail {

	constructor() {
		this.search = new Search();
		this.search = new Settings();
		this.accessibleColors = new Options('.a11y-colors-button', 'accessible-colors-enabled');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window['caniemail'] = new Caniemail();
});