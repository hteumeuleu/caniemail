class Filters {

	constructor() {

		this.filters = document.querySelectorAll('.filters');
		this.current = 'apply';
		this.init();
	}

	init() {
		this.addEvents();
	}

	onDOMContentLoaded() {
		this.showOrHide();
		this.setInitialValue();
	}

	addEvents() {
		this.filters.forEach(filter => {
			const applyButton = filter.querySelector('.filter-apply-button');
			const unapplyButton = filter.querySelector('.filter-unapply-button');

			if(applyButton) {

				applyButton.addEventListener('click', e => {

					e.preventDefault();
					if(window.caniemail && window.caniemail.settings) {
						filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
						applyButton.classList.add('filter-button--active');
						window.caniemail.settings.apply();
						this.setCurrentValue('apply');
					}
				});
			}

			if(unapplyButton) {

				unapplyButton.addEventListener('click', e => {

					e.preventDefault();
					if(window.caniemail && window.caniemail.settings) {
						filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
						unapplyButton.classList.add('filter-button--active');
						window.caniemail.settings.unapply();
						this.setCurrentValue('unapply');
					}
				});
			}
		});
	}

	showOrHide() {

		if(window.caniemail && window.caniemail.settings) {
			if(window.caniemail.settings.isFullyChecked() || window.caniemail.settings.isFullyUnchecked()) {
				this.filters.forEach(filter => {
					filter.setAttribute('hidden', '');
				});
			} else {
				this.filters.forEach(filter => {
					filter.removeAttribute('hidden', '');
				});
			}
		}
	}

	setInitialValue() {

		const storedValue = this.getLocalStorage();
		if(storedValue) {
			this.current = storedValue;
			if(storedValue == 'apply') {
				this.filters.forEach(filter => {
					const applyButton = filter.querySelector('.filter-apply-button');
					filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
					applyButton.classList.add('filter-button--active');
				});
				if(window.caniemail && window.caniemail.settings) {
					window.caniemail.settings.apply();
				}
			} else if(storedValue == 'unapply') {
				this.filters.forEach(filter => {
					const unapplyButton = filter.querySelector('.filter-unapply-button');
					filter.querySelector('.filter-button--active').classList.remove('filter-button--active');
					unapplyButton.classList.add('filter-button--active');
				});
				if(window.caniemail && window.caniemail.settings) {
					window.caniemail.settings.unapply();
				}
			}
		}
	}

	setCurrentValue(state) {

		if(this.current != state && (state == 'apply' || state == 'unapply')) {
			this.current = state;
			this.setLocalStorage();
		}
	}

	setLocalStorage() {

		localStorage.setItem('filters', this.current);
	}

	getLocalStorage() {

		return localStorage.getItem('filters');
	}
}