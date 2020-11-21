class Parameter {

	constructor(parameterName) {

		this.name = parameterName;
		this.enabled = false;
		this.init();
	}

	init() {
		const currentURL = new URL(document.location);
		const parameterInURL = currentURL.searchParams.get(this.name);
		if(parameterInURL == 'true') {
			this.toggle();
		}
	}

	toggle() {

		this.enabled = !this.enabled;
		this.toggleCSSClass();
	}

	toggleCSSClass() {

		const newClassName = this.name;
		document.body.classList.toggle(newClassName);
	}
}