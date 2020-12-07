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
		const featureSlug = this.getSelectedFeatureSlug();
		const featureName = this.getSelectedFeatureName();
		const type = this.getSelectedType();
		let output;
		if(type == "iframe") {
			output = this.getIframeOutput(featureSlug, featureName);
		} else if(type == "image") {
			output = this.getImageOutput(featureSlug, featureName);
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

	getSelectedFeatureSlug() {
		const select = document.getElementById('field-slug');
		const selectedValue = select.options[select.selectedIndex].value;
		if(selectedValue && selectedValue != "") {
			return selectedValue;
		} else {
			return false;
		}
	}

	getSelectedFeatureName() {
		const select = document.getElementById('field-slug');
		const selectedValue = select.options[select.selectedIndex].innerHTML;
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

	getIframeOutput(featureSlug, featureName) {
		return `<iframe title="Can I email… ${featureName}" src="https://embed.caniemail.com/${featureSlug}/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>`;
	}

	getImageOutput(featureSlug, featureName) {
		return `<a href="https://www.caniemail.com/features/${featureSlug}/"><img src="https://screenshots.caniemail.com/${featureSlug}.png" alt="Can I email… ${featureName}" width="640" height="400" style="vertical-align:middle; border:0; max-width:100%; height:auto;" /></a>`;
	}
}