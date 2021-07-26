//
// Support
// Class to make live calculations of Estimated Support in feature pages.
//
class Support {

	constructor() {

		this.currentFeature = document.querySelector('.feature');
		this.currentTotal = 0;
		this.currentValues = new Array();
		this.currentValues['y'] = 0, this.currentValues['a'] = 0, this.currentValues['n'] = 0, this.currentValues['u'] = 0;
	}

	update() {
		const features = document.querySelectorAll('.feature');
		features.forEach(feature => {
			this.currentFeature = feature;
			this.updateSupportValues();
			this.updateScoreHTML();
			this.updateSummaryHTML();
		});
	}

	updateSupportValues() {
		const clients = this.currentFeature.querySelectorAll('.data-family:not([hidden]) .data-client:not([hidden]');
		this.currentTotal = clients.length;
		this.currentValues['y'] = 0, this.currentValues['a'] = 0, this.currentValues['n'] = 0, this.currentValues['u'] = 0;
		clients.forEach(client => {
			const lastVersion = client.querySelector('.data-version:last-child');
			if(lastVersion.classList.contains("supported")) {
				this.currentValues['y']++;
			} else if(lastVersion.classList.contains("mitigated")) {
				this.currentValues['a']++;
			} else if(lastVersion.classList.contains("unsupported")) {
				this.currentValues['n']++;
			} else if(lastVersion.classList.contains("unknown")) {
				this.currentValues['u']++;
			}
		});

	}

	updateScoreHTML() {
		let scoreHTML = "";
		if(this.currentValues['y'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['y'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% supported" style="width:${valueInPercent}%;" class="supported"></div>`;
		}
		if(this.currentValues['a'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['a'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% partially supported" style="width:${valueInPercent}%;" class="mitigated"></div>`;
		}
		if(this.currentValues['n'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['n'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% not supported" style="width:${valueInPercent}%;" class="unsupported"></div>`;
		}
		if(this.currentValues['u'] > 0) {
			const valueInPercent = this.convertToPercent(this.currentValues['u'], this.currentTotal);
			scoreHTML += `<div tabindex="0" role="group" title="${valueInPercent}% support unknown" style="width:${valueInPercent}%;" class="unknown"></div>`;
		}
		this.currentFeature.querySelector('.score').innerHTML = scoreHTML;
	}

	updateSummaryHTML() {
		let summaryHTML = "";
		const yValueInPercent = this.convertToPercent(this.currentValues['y'], this.currentTotal);
		if(this.currentValues['y'] > 0 && this.currentValues['a'] > 0) {
			const aValueInPercent = this.convertToPercent(this.currentValues['a'], this.currentTotal);
			const yPlusAValueInPercent = this.roundToTwoDecimals(yValueInPercent + aValueInPercent);
			summaryHTML = `
				<span class="feature-support-summary-value supported" title="${yValueInPercent}% supported">${yValueInPercent}%</span>
				+ 
				<span class="feature-support-summary-value mitigated" title="${aValueInPercent}% partially supported">${aValueInPercent}%</span>
				= ${yPlusAValueInPercent}%
			`;
		} else if(this.currentValues['y'] > 0) {
			summaryHTML = `
				<span class="feature-support-summary-value supported" title="${yValueInPercent}% supported">${yValueInPercent}%</span> supported
			`;
		}

		// If we have a subset of email clients selected through the settings,
		// we add a text to notice it.
		if(window.caniemail && window.caniemail.filters && window.caniemail.settings) {
			if(window.caniemail.filters.areApplied() && !window.caniemail.settings.isFullyChecked()) {
				summaryHTML += `<p class="feature-support-legend">(across selected email clients)</p>`;
			}
		}
		this.currentFeature.querySelector('.feature-support-summary').innerHTML = summaryHTML;
	}

	convertToPercent(value, total) {
		let valueInPercent = (value * 100) / total;
		return this.roundToTwoDecimals(valueInPercent);
	}

	roundToTwoDecimals(n) {
    	return +(Math.round(n + "e+2")  + "e-2");
	}

}