class Feature {

	constructor() {

		this.addEvent(document.querySelectorAll('.data-summary-family'));
	}

	addEvent(elements) {

		elements.forEach(element => {
			element.addEventListener('click', e => {

				e.preventDefault();

				//summary family
				let selected = e.currentTarget.parentNode.querySelector('.data-summary-family.selected');
				if(selected != null) {
					selected.classList.remove('selected');
				}
				e.currentTarget.classList.add('selected');

				// family
				e.currentTarget.closest('section').querySelectorAll('.data-details .data-family.selected').forEach(element => {
					element.classList.remove('selected');
				});

				const family = e.currentTarget.getAttribute('data-family');
				if(family != null) {
					e.currentTarget.closest('section').querySelector(`.data-details [data-family=${family}]`).classList.add('selected');
				}
				else {
					e.currentTarget.closest('section').querySelectorAll(`.data-details .data-family:not([data-family])`).forEach(element => {
						element.classList.add('selected');
					});
				}

				//scroll
				const details = e.currentTarget.closest('section').querySelector('.data-details');
				const families = details.querySelectorAll('.data-family');
				let scrollLeft = 0;
				for(let i=0; i<families.length; i++) {
					if(families[i].classList.contains('selected')) {
						break;
					}
					scrollLeft += families[i].scrollWidth;
				}
				details.scrollLeft = scrollLeft;
			});
		});
	}
}