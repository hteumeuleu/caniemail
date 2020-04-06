class Settings {

	// TODO
	// Add classes to family and version in feature.html
	// Generate styles to hide and add them on load

	constructor() {

		this.button = document.querySelector('.settings-button');
		this.panel = document.querySelector('.settings');

		if(this.panel && this.button) {
			this.init();
		}

		this.toggle();
	}

	init() {

		this.initValues();
		this.setStyles();
		this.addEventToButton();
		this.addEventToCheckboxes();
		this.addEventToCheckAllButton();
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
			const uncheckedParentCheckboxes = this.panel.querySelectorAll('.settings-list-item > input[type="checkbox"]:not(:checked)');
			if(uncheckedParentCheckboxes.length > 0) {
				uncheckedParentCheckboxes.forEach(checkbox => {
					const checkedChildrenCheckboxes = checkbox.parentNode.querySelectorAll('.settings-child-list-item input[type="checkbox"]:checked');
					if(checkedChildrenCheckboxes.length > 0) {
						checkbox.indeterminate = true;
					}
				});
			}
		}
	}

	addEventToCheckAllButton() {

		let button = this.panel.querySelector('#settings-check-all-button');
		button.addEventListener('click', e => {

			e.preventDefault();
			// Change label
			const dataAttributeLabel = 'data-label-toggle';
			const oldLabel = button.innerText;
			const newLabel = button.getAttribute(dataAttributeLabel);
			button.innerText = newLabel;
			button.setAttribute(dataAttributeLabel, oldLabel);
			// Check/Uncheck all
			const dataAttributeChecked = 'data-checked';
			const checkValue = (button.getAttribute(dataAttributeChecked) == 'true');
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				checkbox.checked = checkValue;
				checkbox.indeterminate = false;
			});
			button.setAttribute(dataAttributeChecked, !checkValue);
			// Save settings
			this.save();
		});
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
				if(checkbox.parentNode.className == 'settings-list-item') {
					const childCheckboxes = checkbox.parentNode.querySelectorAll('.settings-child-list-item input[type="checkbox"]');
					if(childCheckboxes.length > 0) {
						const checkboxStatus = checkbox.checked;
						childCheckboxes.forEach(childCheckbox => {
							childCheckbox.checked = checkboxStatus;
						});
					}
				} else if(checkbox.parentNode.className == 'settings-child-list-item') {
					const parentCheckbox = checkbox.parentNode.parentNode.parentNode.querySelector('input[type="checkbox"]');
					const siblingCheckboxes = parentCheckbox.parentNode.querySelectorAll('.settings-child-list-item input[type="checkbox"]');
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
				this.save();
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

	setStyles() {
		let css = '';
		let cssSelectors = new Array();
		const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]:not(:checked)')
		if(checkboxes && checkboxes.length > 0) {
			checkboxes.forEach(checkbox => {
				const key = checkbox.name;
				const value = checkbox.value;
				if(value.toLowerCase() === 'on') {
					if(!checkbox.indeterminate) {
						cssSelectors.push(`.data-family--${key}`);
					}
				} else {
					cssSelectors.push(`.data-family--${key} .data-client--${value}`);
				}
			});
			cssSelectors = cssSelectors.join(',');
			css += cssSelectors;
			css += '{display:none}';
		}
		const hiddenElements = document.querySelectorAll('.data-family[hidden], .data-client[hidden]');
		if(hiddenElements && hiddenElements.length > 0) {
			hiddenElements.forEach(item => {
				item.removeAttribute('hidden');
			});
		}
		if(cssSelectors.length > 0) {
			document.querySelectorAll(cssSelectors).forEach(item => {
				item.setAttribute('hidden', '');
			});
		}
		this.panel.querySelector('#settings-style').innerHTML = css;
	}

	save() {

		this.setLocalStorage();
		this.setStyles();
	}

}