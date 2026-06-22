// Demo form behavior: prevent a page reload and show a simple confirmation message.
export function handleLeadSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;

	// Clear the fields after a successful mock submission.
	form.reset();

	// Show the success message.
	const messageContainer = document.querySelector('.form-message');
	const formContent = document.querySelector('.form-content');
	if (messageContainer && formContent) {
		formContent.style.display = 'none';
		messageContainer.style.display = 'block';
	}
	
}
