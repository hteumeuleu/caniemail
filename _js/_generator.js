class Generator {

	constructor() {

		this.init();
	}

	init() {
		this.addEvent();
	}

	addEvent() {
		const generateButton = document.getElementById('embed-button');
		generateButton.addEventListener('click', e => {
			e.preventDefault();
			this.updateEmbed();
		});
		const copyButton = document.getElementById('copy-button');
		copyButton.addEventListener('click', e => {
			e.preventDefault();
			if(navigator.clipboard) {
				this.copyEmbed();
			}
		});
	}

	updateEmbed() {
		const feature = this.getSelectedFeature();
		const type = this.getSelectedType();
		let output;
		if(type == "iframe") {
			output = this.getIframeOutput(feature);
		} else if(type == "image") {
			output = this.getImageOutput(feature);
		}
		const section = document.getElementById('embed-code-section');
		const preview = document.getElementById('embed-code-preview');
		const textarea = document.getElementById('embed-code');
		if(output && output != "") {
			textarea.value = output;
			section.removeAttribute('hidden');
			preview.innerHTML = output;
		} else {
			section.setAttribute('hidden', 'hidden');
			preview.innerHTML = '';
			textarea.value = '';
		}
	}

	async copyEmbed() {
		try {
			const textarea = document.getElementById('embed-code');
			const code = textarea.value;
			await navigator.clipboard.writeText(code);
		} catch (error) {
			console.error("Copy failed", error);
		}
	}

	getSelectedFeature() {
		const select = document.getElementById('field-slug');
		const selectedValue = select.options[select.selectedIndex].value;
		if(selectedValue && selectedValue != "") {
			return selectedValue;
		} else {
			return false;
		}
	}

	getSelectedType() {
		const selectedValue = document.querySelector('input[name="type"]:checked').value;
		if(selectedValue && selectedValue != "") {
			return selectedValue;
		} else {
			return false;
		}
	}

	getIframeOutput(feature) {
		return `<iframe src="https://embed.caniemail.com/${feature}/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>`;
	}

	getImageOutput(feature) {
		return `<a href="https://www.caniemail.com/features/${feature}/"><img src="https://screenshots.caniemail.com/${feature}.png" alt="" width="640" height="400" style="vertical-align:middle; border:0; max-width:100%; height:auto;" /></a>`;
	}
}