// Neon text flickers on once, as soon as it first enters the viewport.
// Returns a cleanup function so the effect can be torn down and re-created
// when SvelteKit swaps pages without a full reload.
export function initNeonEffects() {
	const neonScrollSelectors = ['h1', 'h2', '.flicker'].join(',');
	const neonTargets = document.querySelectorAll(neonScrollSelectors);
	let neonObserver;
	let disposed = false;

	const getNeonViewport = () => ({
		top: window.scrollY,
		bottom: window.scrollY + window.innerHeight
	});
	let lastNeonViewport = getNeonViewport();

	neonTargets.forEach((target) => {
		target.classList.add('neon-on-scroll');
	});

	const lightNeonTarget = (target) => {
		target.classList.add('neon-lit');

		if (neonObserver) {
			neonObserver.unobserve(target);
		}
	};

	// The scroll fallback catches fast scrolls that pass over short neon elements between observer checks.
	const revealNeonTargetsInRange = (rangeTop, rangeBottom) => {
		const viewportBuffer = 12;

		neonTargets.forEach((target) => {
			if (target.classList.contains('neon-lit')) {
				return;
			}

			const rect = target.getBoundingClientRect();
			const targetTop = rect.top + window.scrollY;
			const targetBottom = targetTop + rect.height;

			if (targetBottom >= rangeTop - viewportBuffer && targetTop <= rangeBottom + viewportBuffer) {
				lightNeonTarget(target);
			}
		});
	};

	const checkNeonViewport = () => {
		const currentViewport = getNeonViewport();
		const rangeTop = Math.min(lastNeonViewport.top, currentViewport.top);
		const rangeBottom = Math.max(lastNeonViewport.bottom, currentViewport.bottom);

		revealNeonTargetsInRange(rangeTop, rangeBottom);
		lastNeonViewport = currentViewport;
	};

	let neonScrollFrame;
	const scheduleNeonViewportCheck = () => {
		if (disposed || neonScrollFrame) {
			return;
		}

		neonScrollFrame = window.requestAnimationFrame(() => {
			neonScrollFrame = null;
			checkNeonViewport();
		});
	};

	let neonResizeTimer;
	const restartAllNeonFlickers = () => {
		neonTargets.forEach((target) => {
			lightNeonTarget(target);
			target.style.animation = 'none';
		});

		// Force the browser to commit the cleared animation before restoring it.
		void document.body.offsetHeight;

		neonTargets.forEach((target) => {
			target.style.animation = '';
		});
	};

	const scheduleNeonResizeFlicker = () => {
		window.clearTimeout(neonResizeTimer);

		neonResizeTimer = window.setTimeout(() => {
			neonResizeTimer = null;
			window.requestAnimationFrame(restartAllNeonFlickers);
		}, 160);
	};

	if ('IntersectionObserver' in window) {
		neonObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						lightNeonTarget(entry.target);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '0px',
				threshold: 0
			}
		);

		neonTargets.forEach((target) => neonObserver.observe(target));
	} else {
		// Older browsers still get the finished glow, just without the scroll-triggered timing.
		neonTargets.forEach((target) => {
			lightNeonTarget(target);
		});
	}

	window.addEventListener('scroll', scheduleNeonViewportCheck, { passive: true });
	window.addEventListener('resize', scheduleNeonResizeFlicker);
	window.addEventListener('orientationchange', scheduleNeonViewportCheck);
	window.addEventListener('load', scheduleNeonViewportCheck);
	window.addEventListener('pageshow', scheduleNeonViewportCheck);
	window.requestAnimationFrame(checkNeonViewport);

	// Font, image, and layout shifts can move neon items after the first paint, so recheck when those settle.
	if ('fonts' in document) {
		document.fonts.ready.then(scheduleNeonViewportCheck);
	}

	document.querySelectorAll('img').forEach((image) => {
		if (!image.complete) {
			image.addEventListener('load', scheduleNeonViewportCheck, { once: true });
		}
	});

	return () => {
		disposed = true;
		window.removeEventListener('scroll', scheduleNeonViewportCheck);
		window.removeEventListener('resize', scheduleNeonResizeFlicker);
		window.removeEventListener('orientationchange', scheduleNeonViewportCheck);
		window.removeEventListener('load', scheduleNeonViewportCheck);
		window.removeEventListener('pageshow', scheduleNeonViewportCheck);

		if (neonScrollFrame) {
			window.cancelAnimationFrame(neonScrollFrame);
			neonScrollFrame = null;
		}

		window.clearTimeout(neonResizeTimer);

		if (neonObserver) {
			neonObserver.disconnect();
		}
	};
}
