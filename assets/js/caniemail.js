---
layout: null
---
{% include_relative _feature.js %}
{% include_relative _search.js %}

class Caniemail {

	constructor() {
		this.feature = new Feature();
		this.search = new Search();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window['caniemail'] = new Caniemail();
});