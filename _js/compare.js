---
layout: null
permalink: "/assets/js/compare.js"
---
class Compare {

	constructor() {
		this.data = null;
		this.resultsContainer = null;
		this.panel = document.querySelector('.compare');
		this.form = document.getElementById('compare-form');

		if(this.panel && this.form) {
			this.init();
		}
	}

	init() {

		this.setInitialValues();
		this.addEventToResetButton();
		this.addEventToCheckboxes();

		if(!this.data) {
			this.loadJSONFile();
		}
	}

	setInitialValues() {

		const savedValuesString = this.getLocalStorage();
		if(savedValuesString && savedValuesString !== '') {
			const savedValues = savedValuesString.split('&');
			if(savedValues.length > 0) {
				savedValues.forEach(setting => {
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
			const uncheckedParentCheckboxes = this.panel.querySelectorAll('.compare-list-item > input[type="checkbox"]:not(:checked)');
			if(uncheckedParentCheckboxes.length > 0) {
				uncheckedParentCheckboxes.forEach(checkbox => {
					const checkedChildrenCheckboxes = checkbox.parentNode.querySelectorAll('.compare-child-list-item input[type="checkbox"]:checked');
					if(checkedChildrenCheckboxes.length > 0) {
						checkbox.indeterminate = true;
					}
				});
			}
			// Toggle button default state
			if(savedValues.length == this.panel.querySelectorAll('input[type="checkbox"]').length) {
				let button = this.panel.querySelector('#compare-check-all-button');
				const dataAttributeChecked = 'data-checked';
				button.setAttribute(dataAttributeChecked, false);
				// Change label
				const dataAttributeLabel = 'data-label-toggle';
				const oldLabel = button.innerText;
				const newLabel = button.getAttribute(dataAttributeLabel);
				button.innerText = newLabel;
				button.setAttribute(dataAttributeLabel, oldLabel);
			}
		} else {
			const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
			checkboxes.forEach(checkbox => {
				checkbox.checked = false;
			});
		}
	}

	addEventToCheckboxes() {

		const checkboxes = this.panel.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach(checkbox => {
			checkbox.addEventListener('click', e => {
				if(checkbox.parentNode.className == 'compare-list-item') {
					const childCheckboxes = checkbox.parentNode.querySelectorAll('.compare-child-list-item input[type="checkbox"]');
					if(childCheckboxes.length > 0) {
						const checkboxStatus = checkbox.checked;
						childCheckboxes.forEach(childCheckbox => {
							childCheckbox.checked = checkboxStatus;
						});
					}
				} else if(checkbox.parentNode.className == 'compare-child-list-item') {
					const parentCheckbox = checkbox.parentNode.parentNode.parentNode.querySelector('input[type="checkbox"]');
					const siblingCheckboxes = parentCheckbox.parentNode.querySelectorAll('.compare-child-list-item input[type="checkbox"]');
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
				this.refresh();
				this.setLocalStorage();
			});
		});
	}

	addEventToResetButton() {

		let button = this.panel.querySelector('#compare-check-all-button');
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

			this.setLocalStorage();
			this.refresh();
		});
	}

	loadJSONFile() {

		if(!this.data) {
			fetch('/api/data.json')
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.data = json.data;
				this.refresh();
			})
			.catch(error => {
				console.error(error);
			});
		}
	}

	refresh() {
		if(this.data) {

			if(!this.resultsContainer) {
				this.buildResultsContainer();
			}
			this.empty();
			this.buildResults();
		}
	}

	empty() {

		this.resultsContainer.innerHTML = '';
	}

	buildResults() {

		let features = this.buildFeaturesBySupportObject();
		this.buildFeaturesBySupportElement(features.y, 'Supported', 'supported');
		this.buildFeaturesBySupportElement(features.a, 'Partial support', 'mitigated');
		this.buildFeaturesBySupportElement(features.m, 'Mixed support', 'mitigated');
		this.buildFeaturesBySupportElement(features.n, 'Not supported', 'unsupported');
		this.buildFeaturesBySupportElement(features.u, 'Support unknown', 'unknown');

	}

	buildFeaturesBySupportElement(featuresArray, title, tagClassName) {
		if(featuresArray.length > 0) {
			let div = document.createElement('div');
			div.className = 'post post--client';
			div.innerHTML = `<h2 class="post-title"><span class="client-name">${title}</span></h2>`;

			let ul = document.createElement('ul');
			ul.className = 'client-tags';

			featuresArray.forEach(feature => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.className = tagClassName;
				a.href = feature.url;
				a.textContent = feature.title;
				li.append(a);
				ul.append(li);
			});

			div.append(ul);
			this.resultsContainer.appendChild(div);
		}
	}

	buildFeaturesBySupportObject() {
		let featuresBySupport = { 'y':[], 'a':[], 'n':[], 'u':[], 'm':[] };
		const formData = new FormData(this.form);
		this.data.forEach(feature => {
			let averageSupportValue = null;
			for (let key of formData.entries()) {
				if(key[1].toLowerCase() !== 'on') {
					const versions = feature.stats[key[0]][key[1]];
					if(versions) {
						const lastVersionSupportValue = versions[Object.keys(versions)[Object.keys(versions).length - 1]];
						if(lastVersionSupportValue) {
							const supportValue = lastVersionSupportValue.charAt(0);
							if(!averageSupportValue) {
								averageSupportValue = supportValue;
							} else if(averageSupportValue == 'u' && supportValue != 'u') {
								averageSupportValue = supportValue;
							} else if(averageSupportValue == 'y' && supportValue != 'y' && supportValue != 'u') {
								averageSupportValue = 'm';
							} else if(averageSupportValue == 'n' && supportValue != 'n' && supportValue != 'u') {
								averageSupportValue = 'm';
							} else if(averageSupportValue == 'a' && supportValue != 'a' && supportValue != 'u') {
								averageSupportValue = 'm';
							}
						}
					}
				}
			}
			if(averageSupportValue == 'y' || averageSupportValue == 'a' || averageSupportValue == 'n' || averageSupportValue == 'u' || averageSupportValue == 'm') {
				featuresBySupport[averageSupportValue].push(feature);
			}
		});
		return featuresBySupport;
	}

	buildResultsContainer() {

		if(document.querySelector('.main .compare-results') == null) {
			let container = document.createElement('div');
			container.classList.add('compare-results');
			container.id = 'compare-results';
			document.querySelector('.main .posts').prepend(container);
			this.resultsContainer = container;
		}
	}

	getFormDataToString() {

		const formData = new FormData(this.form);
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
		localStorage.setItem('compare', data);
	}

	getLocalStorage() {

		return localStorage.getItem('compare');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.compare = new Compare();
});