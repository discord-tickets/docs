const umamiSite = "{{ config.extra.analytics.website }}";

function feedback () {
	const form = document.forms.feedback;
	if (form) {
		/* Show feedback */
		form.hidden = false;
		form.outerHTML = form.outerHTML;
		form.addEventListener("submit", function (ev) {
			ev.preventDefault();

			/* Retrieve page and feedback value */
			let page = document.location.pathname;
			let data = ev.submitter.getAttribute("data-md-value");

			/* Disable form and show note, if given */
			form.firstElementChild.disabled = true;
			let note = form.querySelector(
				".md-feedback__note [data-md-value='" + data + "']"
			);
			if (note) note.hidden = false;

			/* Send feedback value */
			console.log(page, data);
			umami.trackEvent('feedback', { value: data }, page, umamiSite);
		});
	}
}

feedback();

document.addEventListener("DOMContentLoaded", function () {
	feedback();
});


