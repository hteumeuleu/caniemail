(function() {
	window.Caniemail = window.Caniemail || {};

	Caniemail.feature = {
		init: function() {
			Caniemail.feature.summary.init();
		},
		summary: {
			init: function() {
				var summaryElements = document.querySelectorAll('.data-summary-family');
				for(var i = 0; i < summaryElements.length; i++) {
					summaryElements[i].addEventListener('click', function(e) {
						e.preventDefault();
						if(!this.classList.contains('selected')) {
							Caniemail.feature.summary.unselect();
							this.classList.add('selected');
						} else {
							Caniemail.feature.summary.unselect();
						}
					});
				}
			},
			unselect: function() {
				var selected = document.querySelector('.data-summary-family.selected');
				if(selected) {
					selected.classList.remove('selected');
				}
			}
		}
	};

	document.addEventListener('DOMContentLoaded', function() {
		Caniemail.feature.init();
	});
})();