export function setUrlState(key, value) {
	const url = new URL(window.location.toString());
	url.searchParams.set(key, String(value));
	window.history.pushState({}, '', url);
}

export function getUrlState(key) {
	const url = new URL(window.location.toString());
	const params = url.searchParams.get(key);
	return params;
}

export function removeUrlState(key) {
	const url = new URL(window.location.toString());
	url.searchParams.delete(key);
	window.history.pushState({}, '', url);
}
