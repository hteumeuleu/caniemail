class AccessibleColors {

	constructor() {

		this.button = document.querySelector('.a11y-colors-button');
		this.enabled = false;
		this.cookieName = 'accessible-colors-enabled';
		this.addEvent();
	}

	addEvent() {

		this.init();

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	init() {
		const enableAccessibleColorsCookie = this.readCookie();
		if(enableAccessibleColorsCookie == 'true') {
			this.toggle();
		}
	}

	toggle() {

		this.enabled = !this.enabled;
		this.toggleCSSClass();
		this.toggleLabel();
		this.setCookie();
	}

	toggleCSSClass() {

		const newClassName = this.cookieName;
		document.body.classList.toggle(newClassName);
	}

	toggleLabel() {

		const dataAttributeName = 'data-label-toggle';
		const oldLabel = this.button.innerText;
		const newLabel = this.button.getAttribute(dataAttributeName);
		this.button.innerText = newLabel;
		this.button.setAttribute(dataAttributeName, oldLabel);

	}

	setCookie() {

        let date = new Date();
        date.setTime( date.getTime() + (30 * 24 * 60 * 60 * 1000) );
        const expires = ';expires='+ date.toGMTString();
		document.cookie = `${this.cookieName}=${this.enabled}${expires};path=/;`;
	}

	readCookie() {

        let b = document.cookie.match(`(^|;)\\s*${this.cookieName}\\s*=\\s*([^;]+)`);
        return b ? b.pop() : null;
	}
}