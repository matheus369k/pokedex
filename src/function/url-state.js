export function setUrlState(name, page) {
    const url = new URL(window.location.toString());

    url.searchParams.set(name, String(page));

    window.history.pushState({}, "", url);
}

export function getUrlState(name) {
    const url = new URL(window.location.toString());

    const params = url.searchParams.get(name);

    return params;
}