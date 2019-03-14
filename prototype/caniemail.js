(function() {
	window.Caniemail = window.Caniemail || {};

	Caniemail.draft = {
		init: function() {
			Caniemail.draft.feature.hide();
			Caniemail.draft.details.hide();
			Caniemail.draft.notes.hide();
			Caniemail.draft.search.init();
			Caniemail.draft.details.init();
		},
		search: {
			init: function() {
				var input = document.querySelector('.search');
				Caniemail.draft.search.refresh(input.value);
				input.addEventListener('keyup', function() {
					Caniemail.draft.search.refresh(this.value);
				});
			},
			refresh: function(value) {
				if(value !== '') {
					Caniemail.draft.feature.show();
					Caniemail.draft.feature.refreshName();
				} else {
					Caniemail.draft.feature.hide();
				}
			}
		},
		feature: {
			show: function() {
				var feature = document.querySelector('.feature');
				feature.style.display = 'block';
			},
			hide: function() {
				var feature = document.querySelector('.feature');
				feature.style.display = 'none';
				Caniemail.draft.details.hide();
			},
			refreshName: function() {
				var input = document.querySelector('.search');
				var featureTitle = document.querySelector('.feature .data-title');
				featureTitle.innerText = input.value;
			}
		},
		notes: {
			show: function() {
				var notes = document.querySelector('.data-notes');
				notes.style.display = 'block';
			},
			hide: function() {
				var notes = document.querySelector('.data-notes');
				notes.style.display = 'none';
			}
		},
		details: {
			init: function() {
				var tabs = document.querySelectorAll('.data-summary-client');
				for(var i = 0; i < tabs.length; i++) {
					tabs[i].addEventListener('click', function() {
						if(!this.classList.contains('selected')) {
							Caniemail.draft.details.unselect();
							this.classList.add('selected');
							Caniemail.draft.details.show();
							Caniemail.draft.notes.show();
						} else {
							Caniemail.draft.details.unselect();
							Caniemail.draft.details.hide();
							Caniemail.draft.notes.hide();
						}
					});
				}
			},
			unselect: function() {
				var selected = document.querySelector('.data-summary-client.selected');
				if(selected) {
					selected.classList.remove('selected');
				}
			},
			show: function() {
				var details = document.querySelector('.data-details');
				details.style.display = 'block';
			},
			hide: function() {
				var details = document.querySelector('.data-details');
				details.style.display = 'none';
			}
		}
	};

	document.addEventListener('DOMContentLoaded', function() {
		Caniemail.draft.init();
	});
})();