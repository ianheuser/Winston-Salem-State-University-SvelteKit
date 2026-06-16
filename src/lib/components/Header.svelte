<script>
	import {resolve,asset} from '$app/paths'
	import { onMount } from 'svelte';

	// @ts-ignore
	let menuButton;
	// @ts-ignore
	let mobileNav;

	onMount(() => {
		// Keep this breakpoint in sync with the CSS rule that hides the burger menu.
		const mobileBreakpoint = window.matchMedia('(max-width: 980px)');
		const menuAnimationDuration = 380;
		const menuOpenDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 260;
		// @ts-ignore
		let menuCloseTimer;
		// @ts-ignore
		let menuOpenTimer;

		// This keeps the button label, expanded state, and animated menu state in sync.
		// @ts-ignore
		const setMenuButtonState = (isOpen) => {
			// @ts-ignore
			menuButton.setAttribute('aria-expanded', String(isOpen));
			// @ts-ignore
			menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
		};

		// Opening starts from the hidden state, then adds the class on the next frame so CSS can animate it.
		const openMobileMenu = () => {
			// @ts-ignore
			window.clearTimeout(menuCloseTimer);
			// @ts-ignore
			window.clearTimeout(menuOpenTimer);
			// @ts-ignore
			mobileNav.hidden = false;
			// @ts-ignore
			mobileNav.classList.remove('is-closing');
			// The body class fades in the page-dimming backdrop behind the mobile dropdown.
			document.body.classList.add('mobile-menu-backdrop-visible');
			setMenuButtonState(true);

			const showOpenMenu = () => {
				// @ts-ignore
				if (mobileNav.hidden || menuButton.getAttribute('aria-expanded') !== 'true') {
					return;
				}

				// @ts-ignore
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
			// @ts-ignore
			window.clearTimeout(menuCloseTimer);
			// @ts-ignore
			window.clearTimeout(menuOpenTimer);
			setMenuButtonState(false);
			// @ts-ignore
			mobileNav.classList.remove('is-open');
			// Removing the backdrop class lets the dimmed page fade back to normal as the menu closes.
			document.body.classList.remove('mobile-menu-backdrop-visible');

			// @ts-ignore
			if (immediate || mobileNav.hidden) {
				// @ts-ignore
				mobileNav.classList.remove('is-closing');
				// @ts-ignore
				mobileNav.hidden = true;
				return;
			}

			// @ts-ignore
			mobileNav.classList.add('is-closing');
			menuCloseTimer = window.setTimeout(() => {
				// @ts-ignore
				mobileNav.classList.remove('is-closing');
				// @ts-ignore
				mobileNav.hidden = true;
			}, menuAnimationDuration);
		};

		// Start every page load from a closed menu, even if the browser restores old state.
		const resetMobileMenu = () => {
			// @ts-ignore
			window.clearTimeout(menuOpenTimer);
			// @ts-ignore
			menuButton.setAttribute('aria-expanded', 'false');
			// @ts-ignore
			menuButton.setAttribute('aria-label', 'Open menu');
			// @ts-ignore
			mobileNav.classList.remove('is-open', 'is-closing');
			document.body.classList.remove('mobile-menu-backdrop-visible');
			// @ts-ignore
			mobileNav.hidden = true;
		};

		// Toggle the dropdown when the burger button is tapped.
		const handleMenuButtonClick = () => {
			// @ts-ignore
			const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

			if (isOpen) {
				closeMobileMenu();
			} else {
				openMobileMenu();
			}
		};

		// Close the menu after choosing a link so the page content is visible again.
		// @ts-ignore
		const handleMobileNavClick = (event) => {
			if (event.target.matches('a')) {
				closeMobileMenu();
			}
		};

		// Close the mobile menu when the user clicks back into the page outside the dropdown.
		// @ts-ignore
		const handleDocumentClick = (event) => {
			// @ts-ignore
			if (mobileNav.hidden) {
				return;
			}

			const clickedElement = event.target;

			// @ts-ignore
			if (mobileNav.contains(clickedElement) || menuButton.contains(clickedElement)) {
				return;
			}

			closeMobileMenu();
		};

		// If the viewport grows past mobile size, close the menu because the burger disappears.
		// @ts-ignore
		const handleBreakpointChange = (event) => {
			if (!event.matches) {
				closeMobileMenu({ immediate: true });
			}
		};

		// Any window resize can move the dropdown out of alignment, so close it and let the user reopen cleanly.
		const handleWindowResize = () => {
			// @ts-ignore
			if (!mobileNav.hidden) {
				closeMobileMenu({ immediate: !mobileBreakpoint.matches });
			}
		};

		// @ts-ignore
		menuButton.addEventListener('click', handleMenuButtonClick);
		// @ts-ignore
		mobileNav.addEventListener('click', handleMobileNavClick);
		document.addEventListener('click', handleDocumentClick);
		mobileBreakpoint.addEventListener('change', handleBreakpointChange);
		window.addEventListener('resize', handleWindowResize);

		resetMobileMenu();

		return () => {
			// @ts-ignore
			window.clearTimeout(menuCloseTimer);
			// @ts-ignore
			window.clearTimeout(menuOpenTimer);
			// @ts-ignore
			menuButton.removeEventListener('click', handleMenuButtonClick);
			// @ts-ignore
			mobileNav.removeEventListener('click', handleMobileNavClick);
			document.removeEventListener('click', handleDocumentClick);
			mobileBreakpoint.removeEventListener('change', handleBreakpointChange);
			window.removeEventListener('resize', handleWindowResize);
			document.body.classList.remove('mobile-menu-backdrop-visible');
		};
	});
</script>

<header class="site-header">
	<a class="brand" href={ resolve("/") } aria-label="Winston-Salem State University Graduate College home">
		<img src={ asset("/images/new-logo.png") } class="main-logo" alt="Winston-Salem State University Graduate College" />
	</a>

	<nav class="desktop-nav" aria-label="Primary navigation">
		<a class="flickerOnRoll" href={ resolve("/programs/mcst") }>Programs</a>
		<a class="flickerOnRoll" href="#financial-aid">Financial Aid</a>
		<a class="flickerOnRoll nav-contact" href="#contact">Contact</a>
	</nav>

	<button bind:this={menuButton} class="menu-burger" type="button" aria-label="Open menu" aria-expanded="false">
		<span></span>
		<span></span>
		<span></span>
	</button>

</header>

<nav bind:this={mobileNav} class="mobile-nav" aria-label="Mobile navigation" hidden>
	<a class="flickerOnRoll" href={ resolve("/programs/data-analytics") }>Programs</a>
	<a class="flickerOnRoll" href="#financial-aid">Financial Aid</a>
	<a class="flickerOnRoll" href="#contact">Contact</a>
</nav>


<style>
	
.site-header {
  position: sticky;
  top: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 190px;
  background: var(--black);
  border-bottom: 6px solid var(--red);
  padding: 0px 50px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.34);
  z-index: 101;
}

.main-logo {
  position: relative;
  display: block;
  
}

.brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 250px;
}


.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(34px, 5vw, 88px);
  color: var(--white);
  font-family: "Tilt Neon", sans-serif;
  font-size: clamp(16px, 1.72vw, 25px);
  text-transform: uppercase;
}

.desktop-nav a {
  transition: color 180ms ease, text-shadow 180ms ease, box-shadow 180ms ease;
}

.desktop-nav a:not(.nav-contact):hover,
.desktop-nav a:not(.nav-contact):focus-visible,
.mobile-nav a:hover,
.mobile-nav a:focus-visible {
  color: var(--red-bright);
}

.nav-contact {
  min-width: 154px;
  padding: 8px 20px 9px;
  color: var(--red);
  text-align: center;
  border: 2px solid var(--red);
  border-radius: 14px;
}

.menu-burger {
  display: none;
  width: 42px;
  height: 42px;
  padding: 8px;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.menu-burger span {
  display: block;
  height: 3px;
  margin: 6px 0;
  background: var(--white);
  border-radius: 999px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.75);
  transition: opacity 180ms ease, transform 260ms ease, box-shadow 260ms ease;
}

:global(.menu-burger[aria-expanded="true"] span:nth-child(1)) {
  transform: translateY(9px) rotate(45deg);
}

:global(.menu-burger[aria-expanded="true"] span:nth-child(2)) {
  opacity: 0;
}

:global(.menu-burger[aria-expanded="true"] span:nth-child(3)) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-nav {
  position: fixed;
  z-index: 55;
  top: var(--header-height);
  left: 0;
  right: 0;
  width: 100%;
  padding: 42px 32px;
  overflow: hidden;
  background: var(--black);
  color: var(--white);
  border-bottom: 3px solid var(--red);
  font-family: "Tilt Neon", sans-serif;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.48), 0 0 24px rgba(204, 17, 44, 0.3);
  clip-path: inset(0 0 100% 0);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-14px) scaleY(0.94);
  transform-origin: top center;
  transition:
    clip-path 360ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 240ms ease,
    transform 360ms cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-nav[hidden] {
  display: none;
}

:global(.mobile-nav.is-open) {
  clip-path: inset(0 0 0 0);
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scaleY(1);
}

:global(.mobile-nav.is-closing) {
  pointer-events: none;
}

.mobile-nav a {
  display: block;
  padding: 12px;
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 220ms ease, transform 300ms ease;
}

:global(.mobile-nav.is-open) a {
  opacity: 1;
  transform: translateY(0);
}

:global(.mobile-nav.is-open) a:nth-child(2) {
  transition-delay: 55ms;
}

:global(.mobile-nav.is-open) a:nth-child(3) {
  transition-delay: 110ms;
}

.mobile-nav a + a {
  border-top: 1px solid rgba(255, 255, 255, 0.22);
}

.nav-contact:hover,
.nav-contact:focus-visible {
  box-shadow:
    0 0 10px currentColor,
    inset 0 0 8px currentColor;
}

.nav-contact {
  text-shadow: none;
  box-shadow: none;
}

@media (max-width: 980px) {

  .site-header {
    min-height: 122px;
    padding: 26px 28px 24px;
  }

  .brand {
    width: 150px;
    gap: 4px;
    aspect-ratio: 402 / 112;
  }

  .desktop-nav {
    display: none;
  }

  .menu-burger {
    display: block;
  }

}

</style>