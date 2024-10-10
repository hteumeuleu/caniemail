class Settings {

	constructor() {

		this.unchecked = false;
		this.button = document.querySelector('.settings-button');
		this.panel = document.querySelector('.settings');

		if(this.panel && this.button) {
			this.init();
		}
	}

	init() {

		this.initEmptyMessages();
		this.setInitialValues();
		this.setStyles();
		this.addEventToToggleButton();
		this.addEventToCheckboxes();
		this.addEventToCheckAllButton();
		this.addEventToDevicesButtons();
	}

	setInitialValues() {

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
						if(checkbox) {
							checkbox.checked = true;
						}
					} else {
						const checkbox = this.panel.querySelector(`input[type="checkbox"][name="${key}"][value="${value}"]`);
						if(checkbox) {
							checkbox.checked = true;
						}
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
		} else {
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				checkbox.checked = true;
			});
			this.save();
		}
		this.setUncheckedVariable();
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

	addEventToToggleButton() {

		this.button.addEventListener('click', e => {

			e.preventDefault();
			this.toggle();
		});
	}

	addEventToDevicesButtons() {
		const mobilePlatforms = ['mobile-webmail', 'webmail', 'ios', 'android', 'outlook-com'];
		const desktopPlatforms = ['desktop-app', 'desktop-webmail', 'webmail', 'windows', 'macos', 'linux', 'windows-mail', 'outlook-com'];
		let mobileButton = this.panel.querySelector('#settings-mobile-button');
		let desktopButton = this.panel.querySelector('#settings-desktop-button');

		mobileButton.addEventListener('click', e => {

			e.preventDefault();
			// Check the mobile clients checkboxes
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				const checkValue = mobilePlatforms.indexOf(checkbox.value) > -1 ? true : false;
				checkbox.checked = checkValue;
				checkbox.indeterminate = false;
			});
			// Set the state of the family's checkboxes
			const familyCheckboxes = this.panel.querySelectorAll('.settings-list-item > input[type="checkbox"]');
			familyCheckboxes.forEach(checkbox => {
				const childCheckboxesAll = checkbox.parentNode.querySelectorAll('.settings-child-list-item > input[type="checkbox"]');
				const childCheckboxesChecked = checkbox.parentNode.querySelectorAll('.settings-child-list-item > input[type="checkbox"]:checked');
				if(childCheckboxesChecked.length === 0) {
					checkbox.checked = false;
				} else if(childCheckboxesChecked.length === childCheckboxesAll.length) {
					checkbox.checked = true;
				} else {
					checkbox.indeterminate = true;
				}
			});
			// Save settings
			this.save();
		});

		desktopButton.addEventListener('click', e => {

			e.preventDefault();
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				const checkValue = desktopPlatforms.indexOf(checkbox.value) > -1 ? true : false;
				checkbox.checked = checkValue;
				checkbox.indeterminate = false;
			});
			// Set the state of the family's checkboxes
			const familyCheckboxes = this.panel.querySelectorAll('.settings-list-item > input[type="checkbox"]');
			familyCheckboxes.forEach(checkbox => {
				const childCheckboxesAll = checkbox.parentNode.querySelectorAll('.settings-child-list-item > input[type="checkbox"]');
				const childCheckboxesChecked = checkbox.parentNode.querySelectorAll('.settings-child-list-item > input[type="checkbox"]:checked');
				if(childCheckboxesChecked.length === 0) {
					checkbox.checked = false;
				} else if(childCheckboxesChecked.length === childCheckboxesAll.length) {
					checkbox.checked = true;
				} else {
					checkbox.indeterminate = true;
				}
			});
			// Save settings
			this.save();
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

	unapply() {

		const hiddenElements = document.querySelectorAll('.data-family[hidden], .data-client[hidden]');
		if(hiddenElements && hiddenElements.length > 0) {
			hiddenElements.forEach(item => {
				item.removeAttribute('hidden');
			});
		}
		this.panel.querySelector('#settings-style').innerHTML = '';
	}

	apply() {

		this.setStyles();
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
		this.unapply();
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
		this.setUncheckedVariable();
		this.toggleEmptyMessage();

		if(window.caniemail && window.caniemail.filters) {
			window.caniemail.filters.setCurrentValue('apply');
			window.caniemail.filters.showOrHide();
		}

		if(window.caniemail && window.caniemail.support) {
			window.caniemail.support.update();
		}
	}

	isFullyChecked() {
		const allCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		const allCheckedCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]:checked');
		return (allCheckboxes.length == allCheckedCheckboxes.length);
	}

	isFullyUnchecked() {
		const allCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		const allUncheckedCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]:not(:checked)');
		return (allCheckboxes.length == allUncheckedCheckboxes.length);
	}

	setUncheckedVariable() {
		const allCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		const allUncheckedCheckboxes = this.panel.querySelectorAll('input[type="checkbox"]:not(:checked)');
		this.unchecked = (allCheckboxes.length == allUncheckedCheckboxes.length);
	}

	createEmptyDataMessageElement() {
		const message = this.getRandomEmptyMessage();
		const emptyMessageElement = document.createElement('div');
		emptyMessageElement.className = 'empty-message';
		emptyMessageElement.innerHTML = `<p class="i">${message.emoji}</p><p>${message.text}</p>`;
		return emptyMessageElement;
	}

	getEmptyDataMessageElement() {
		return this.createEmptyDataMessageElement();
	}

	toggleEmptyMessage() {
		if(this.unchecked) {
			const dataContainers = document.querySelectorAll('.data-details');
			let emptyDataMessage = this.getEmptyDataMessageElement();
			dataContainers.forEach(dataContainer => {
				const existingEmptyDataMessage = dataContainer.querySelector('.empty-message');
				if(existingEmptyDataMessage === null) {
					dataContainer.appendChild(emptyDataMessage.cloneNode(true));
				} else {
					existingEmptyDataMessage.removeAttribute('hidden');
				}
			});
		} else {
			let existingEmptyDataMessages = document.querySelectorAll('.empty-message');
			existingEmptyDataMessages.forEach(item => {
				item.setAttribute('hidden', '');
			});
		}
	}

	initEmptyMessages() {
		this.emptyMessages = [
			{
				"emoji": "&#128123;",
				"text": "Boo! You woke up the <b>Email Ghost</b>!<br>Check some email clients again or it might haunt you forever!"
			},
			{
				"emoji": "&#x1F996;",
				"text": "Rawr! You brought back the <b>Emailosaurus Rex</b>!<br>Check some email clients again or it might run after you!"
			},
			{
				"emoji": "&#x1F41D;",
				"text": "Bzzz! You attracted the <b>Email Bee</b>!<br>Check some email clients again or it might sting you!"
			},
		];
	}

	getRandomEmptyMessage() {
		let randomIndex = Math.floor(Math.random() * Math.floor(this.emptyMessages.length));
		return this.emptyMessages[randomIndex];
	}


}