const umamiSite = "{{ config.extra.analytics.website }}";
const feedback = document.forms.feedback;
if (feedback) {
	/* Show feedback */
	feedback.hidden = false;

	feedback.addEventListener("submit", function (ev) {
		ev.preventDefault();

		/* Retrieve page and feedback value */
		let page = document.location.pathname;
		let data = ev.submitter.getAttribute("data-md-value");

		/* Disable form and show note, if given */
		feedback.firstElementChild.disabled = true;
		let note = feedback.querySelector(
			".md-feedback__note [data-md-value='" + data + "']"
		);
		if (note) note.hidden = false;

		/* Send feedback value */
		console.log(page, data);
		umami.trackEvent('feedback', { value: data }, page, umamiSite);
	});
}


