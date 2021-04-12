export function cn(...args) {
	return args.filter(Boolean).join(' ')
}

function handleShowNav() {
	setShowNav(true);
}

function handleHideNav() {
	setShowNav(false);
}
