class AccessibleColors {

	constructor() {

		this.addEvent();
	}

	addEvent() {

		const element = document.querySelector('.a11y-colors-button');
		element.addEventListener('click', e => {

			e.preventDefault();
			document.body.classList.toggle('accessible-colors-enabled');
		});
	}
}