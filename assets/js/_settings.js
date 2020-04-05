class Settings {

	// TODO
	// Add classes to family and version in feature.html
	// Generate styles to hide and add them on load

	constructor() {

		this.button = document.querySelector('.caniemail-settings-button');
		this.panel = document.querySelector('.caniemail-settings');

		if(this.panel && this.button) {
			this.init();
		}

		this.toggle();
	}

	init() {

		this.initValues();
		this.addEventToButton();
		this.addEventToCheckboxes();
	}

	initValues() {

		const settingsString = this.getLocalStorage();
		if(settingsString && settingsString !== '') {
			const settings = settingsString.split('&');
			if(settings.length > 0) {
				settings.forEach(setting => {
					const keyValuePair = setting.split('=');
					const key = keyValuePair[0];
					const value = keyValuePair[1];
					if(value.toLowerCase() == 'on') {
						const checkbox = this.panel.querySelector(`input[type="checkbox"][name="${key}"]`);
						checkbox.checked = true;
					} else {
						const checkbox = this.panel.querySelector(`input[type="checkbox"][name="${key}"][value="${value}"]`);
						checkbox.checked = true;
					}
				});
			}
			// Indeterminate status
			const uncheckedParentCheckboxes = this.panel.querySelectorAll('.caniemail-settings-list-item > input[type="checkbox"]:not(:checked)');
			if(uncheckedParentCheckboxes.length > 0) {
				uncheckedParentCheckboxes.forEach(checkbox => {
					const checkedChildrenCheckboxes = checkbox.parentNode.querySelectorAll('.caniemail-settings-child-list-item input[type="checkbox"]:checked');
					if(checkedChildrenCheckboxes.length > 0) {
						checkbox.indeterminate = true;
					}
				});
			}
		}
	}

	addEventToButton() {

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	addEventToCheckboxes() {

		const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener('click', e => {
				if(checkbox.parentNode.className == 'caniemail-settings-list-item') {
					const childCheckboxes = checkbox.parentNode.querySelectorAll('.caniemail-settings-child-list-item input[type="checkbox"]');
					if(childCheckboxes.length > 0) {
						const checkboxStatus = checkbox.checked;
						childCheckboxes.forEach(childCheckbox => {
							childCheckbox.checked = checkboxStatus;
						});
					}
				} else if(checkbox.parentNode.className == 'caniemail-settings-child-list-item') {
					const parentCheckbox = checkbox.parentNode.parentNode.parentNode.querySelector('input[type="checkbox"]');
					const siblingCheckboxes = parentCheckbox.parentNode.querySelectorAll('.caniemail-settings-child-list-item input[type="checkbox"]');
					if(parentCheckbox.checked == true) {
						if(siblingCheckboxes.length == 1) {
							parentCheckbox.indeterminate = false;
						} else {
							parentCheckbox.indeterminate = true;
						}
						parentCheckbox.checked = false;
					} else {
						let checkboxesStatusIsTheSame = true;
						siblingCheckboxes.forEach(siblingCheckbox => {
							if(siblingCheckbox.checked != checkbox.checked) {
								checkboxesStatusIsTheSame = false;
							}
						});
						if(checkboxesStatusIsTheSame) {
							parentCheckbox.checked = checkbox.checked;
							parentCheckbox.indeterminate = false;
						} else {
							parentCheckbox.checked = false;
							parentCheckbox.indeterminate = true;
						}
					}
				}
				this.setLocalStorage();
			});
		});
	}

	toggle() {

		this.panel.toggleAttribute('hidden');
		document.body.classList.toggle('settings-opened');
	}

	getFormDataToString() {

		const form = document.getElementById('settings-form');
		const formData = new FormData(form);
		let formDataString = '';
		for (var key of formData.entries()) {
			if(formDataString !== '') {
				formDataString += '&';
			}
			formDataString += key[0] + '=' + key[1];
		}
		return formDataString;
	}

	setLocalStorage() {

		const data = this.getFormDataToString();
		localStorage.setItem('settings', data);
	}

	getLocalStorage() {

		return localStorage.getItem('settings');
	}

}