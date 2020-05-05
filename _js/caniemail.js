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
		this.fixMenuTabIndex();
	}

	fixMenuTabIndex() {
		const breakpointValueInRem = 801 / 16;
		const mediaQuery = '(min-width:'+breakpointValueInRem+'rem)';
		if(window.matchMedia(mediaQuery)) {
			const menuLinks = document.querySelectorAll('.menu a:not([href="/clients/"])');
			const menuLastLink = document.querySelector('.menu a[href="/clients/"]');
			menuLinks.forEach(menuLinkItem => {
				menuLinkItem.setAttribute('tabindex', '1');
			});
			menuLastLink.setAttribute('tabindex', '2');
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.caniemail = new Caniemail();
	window.caniemail.filters.onDOMContentLoaded();
});