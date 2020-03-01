class Settings {

	constructor() {

		this.button = document.querySelector('.caniemail-settings-button');
		this.panel = document.querySelector('.caniemail-settings');

		if(this.panel && this.button) {
			this.init();
		}
	}

	addEvent() {

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	init() {

		this.addEvent();
	}

	toggle() {

		this.panel.toggleAttribute('hidden');
	}
}