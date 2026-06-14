<script>
	import {resolve,asset} from '$app/paths'
	import { onMount } from 'svelte';

	let menuButton;
	let mobileNav;

	onMount(() => {
		// Keep this breakpoint in sync with the CSS rule that hides the burger menu.
		const mobileBreakpoint = window.matchMedia('(max-width: 980px)');
		const menuAnimationDuration = 380;
		const menuOpenDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 260;
		let menuCloseTimer;
		let menuOpenTimer;

		// This keeps the button label, expanded state, and animated menu state in sync.
		const setMenuButtonState = (isOpen) => {
			menuButton.setAttribute('aria-expanded', String(isOpen));
			menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
		};

		// Opening starts from the hidden state, then adds the class on the next frame so CSS can animate it.
		const openMobileMenu = () => {
			window.clearTimeout(menuCloseTimer);
			window.clearTimeout(menuOpenTimer);
			mobileNav.hidden = false;
			mobileNav.classList.remove('is-closing');
			// The body class fades in the page-dimming backdrop behind the mobile dropdown.
			document.body.classList.add('mobile-menu-backdrop-visible');
			setMenuButtonState(true);

			const showOpenMenu = () => {
				if (mobileNav.hidden || menuButton.getAttribute('aria-expanded') !== 'true') {
					return;
				}

				mobileNav.classList.add('is-open');
			};

			// Let the backdrop darken first, then slide the dropdown out a beat later.
			menuOpenTimer = window.setTimeout(() => {
				menuOpenTimer = null;
				window.requestAnimationFrame(showOpenMenu);
				window.setTimeout(showOpenMenu, 32);
			}, menuOpenDelay);
		};

		// Closing removes the open class first, then hides the menu after the CSS transition finishes.
		const closeMobileMenu = ({ immediate = false } = {}) => {
			window.clearTimeout(menuCloseTimer);
			window.clearTimeout(menuOpenTimer);
			setMenuButtonState(false);
			mobileNav.classList.remove('is-open');
			// Removing the backdrop class lets the dimmed page fade back to normal as the menu closes.
			document.body.classList.remove('mobile-menu-backdrop-visible');

			if (immediate || mobileNav.hidden) {
				mobileNav.classList.remove('is-closing');
				mobileNav.hidden = true;
				return;
			}

			mobileNav.classList.add('is-closing');
			menuCloseTimer = window.setTimeout(() => {
				mobileNav.classList.remove('is-closing');
				mobileNav.hidden = true;
			}, menuAnimationDuration);
		};

		// Start every page load from a closed menu, even if the browser restores old state.
		const resetMobileMenu = () => {
			window.clearTimeout(menuOpenTimer);
			menuButton.setAttribute('aria-expanded', 'false');
			menuButton.setAttribute('aria-label', 'Open menu');
			mobileNav.classList.remove('is-open', 'is-closing');
			document.body.classList.remove('mobile-menu-backdrop-visible');
			mobileNav.hidden = true;
		};

		// Toggle the dropdown when the burger button is tapped.
		const handleMenuButtonClick = () => {
			const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

			if (isOpen) {
				closeMobileMenu();
			} else {
				openMobileMenu();
			}
		};

		// Close the menu after choosing a link so the page content is visible again.
		const handleMobileNavClick = (event) => {
			if (event.target.matches('a')) {
				closeMobileMenu();
			}
		};

		// Close the mobile menu when the user clicks back into the page outside the dropdown.
		const handleDocumentClick = (event) => {
			if (mobileNav.hidden) {
				return;
			}

			const clickedElement = event.target;

			if (mobileNav.contains(clickedElement) || menuButton.contains(clickedElement)) {
				return;
			}

			closeMobileMenu();
		};

		// If the viewport grows past mobile size, close the menu because the burger disappears.
		const handleBreakpointChange = (event) => {
			if (!event.matches) {
				closeMobileMenu({ immediate: true });
			}
		};

		// Any window resize can move the dropdown out of alignment, so close it and let the user reopen cleanly.
		const handleWindowResize = () => {
			if (!mobileNav.hidden) {
				closeMobileMenu({ immediate: !mobileBreakpoint.matches });
			}
		};

		menuButton.addEventListener('click', handleMenuButtonClick);
		mobileNav.addEventListener('click', handleMobileNavClick);
		document.addEventListener('click', handleDocumentClick);
		mobileBreakpoint.addEventListener('change', handleBreakpointChange);
		window.addEventListener('resize', handleWindowResize);

		resetMobileMenu();

		return () => {
			window.clearTimeout(menuCloseTimer);
			window.clearTimeout(menuOpenTimer);
			menuButton.removeEventListener('click', handleMenuButtonClick);
			mobileNav.removeEventListener('click', handleMobileNavClick);
			document.removeEventListener('click', handleDocumentClick);
			mobileBreakpoint.removeEventListener('change', handleBreakpointChange);
			window.removeEventListener('resize', handleWindowResize);
			document.body.classList.remove('mobile-menu-backdrop-visible');
		};
	});
</script>

<header class="site-header">
	<a class="brand" href="/" aria-label="Winston-Salem State University Graduate College home">
		<img src={ asset("/images/new-logo.png") } class="main-logo" alt="Winston-Salem State University Graduate College" />
	</a>

	<nav class="desktop-nav" aria-label="Primary navigation">
		<a href={ resolve("/programs/mcst") }>Programs</a>
		<a href="#financial-aid">Financial Aid</a>
		<a class="nav-contact" href="#contact">Contact</a>
	</nav>

	<button bind:this={menuButton} class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
		<span></span>
		<span></span>
		<span></span>
	</button>
</header>

<nav bind:this={mobileNav} class="mobile-nav" aria-label="Mobile navigation" hidden>
	<a href={ resolve("/programs/mcst") }>Programs</a>
	<a href="#financial-aid">Financial Aid</a>
	<a href="#contact">Contact</a>
</nav>
