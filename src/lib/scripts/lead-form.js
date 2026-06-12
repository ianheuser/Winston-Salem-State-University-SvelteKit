// Demo form behavior: prevent a page reload and show a simple confirmation message.
export function handleLeadSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;

	// Each form can provide its own success message through a data attribute.
	const status = form.querySelector('.form-status');
	const message = form.dataset.successMessage || 'Thanks. We will be in touch soon.';

	if (status) {
		status.textContent = message;
	}

	// Clear the fields after a successful mock submission.
	form.reset();
}
