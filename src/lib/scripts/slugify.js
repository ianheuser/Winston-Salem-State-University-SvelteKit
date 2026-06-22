/**
 * @param {string} text
 * @returns {string} The slugified version of the input text
 */

export function slugify(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}