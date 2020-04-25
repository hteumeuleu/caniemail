class Options {

	constructor(buttonSelector, optionName) {

		this.button = document.querySelector(buttonSelector);
		this.name = optionName;
		this.enabled = false;
		if(this.button) {
			this.addEvent();
		}
	}

	addEvent() {

		this.init();

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	init() {
		const enableOption = this.getLocalStorage();
		if(enableOption == 'true') {
			this.toggle();
		}
	}

	toggle() {

		this.enabled = !this.enabled;
		this.toggleCSSClass();
		this.toggleLabel();
		this.setLocalStorage();
	}

	toggleCSSClass() {

		const newClassName = this.name;
		document.body.classList.toggle(newClassName);
	}

	toggleLabel() {

		const dataAttributeName = 'data-label-toggle';
		const oldLabel = this.button.innerText;
		const newLabel = this.button.getAttribute(dataAttributeName);
		this.button.innerText = newLabel;
		this.button.setAttribute(dataAttributeName, oldLabel);

	}

	setLocalStorage() {

		localStorage.setItem(this.name, this.enabled);
	}

	getLocalStorage() {

		return localStorage.getItem(this.name);
	}
}