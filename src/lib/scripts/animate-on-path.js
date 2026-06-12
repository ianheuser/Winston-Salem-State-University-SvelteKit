// Moves the ram head along the SVG path once the section scrolls into view.
// Returns a cleanup function for SvelteKit page teardown.
export function initRamPathAnimation() {
	const motionPath = document.querySelector('#js-motion-path');
	const ramHead = document.querySelector('#js-path-ram');
	const pathBullets = Array.from(document.querySelectorAll('.path-proof-bullet'));
	const duration = 8000;
	let animationStart = null;
	let animationStarted = false;
	let startCheckFrame = null;
	let disposed = false;

	if (!motionPath || !ramHead) {
		return () => {};
	}

	const updateBulletLights = (progress) => {
		pathBullets.forEach((bullet) => {
			const lightProgress = Number(bullet.dataset.progress);

			bullet.classList.toggle('is-lit', progress >= lightProgress);
		});
	};

	const placeRamOnPath = (progress) => {
		const pathLength = motionPath.getTotalLength();
		const point = motionPath.getPointAtLength(pathLength * progress);

		ramHead.setAttribute('transform', `translate(${point.x} ${point.y})`);
		updateBulletLights(progress);
	};

	const animateRam = (timestamp) => {
		if (disposed) {
			return;
		}

		if (animationStart === null) {
			animationStart = timestamp;
		}

		const progress = Math.min((timestamp - animationStart) / duration, 1);

		placeRamOnPath(progress);

		if (progress < 1) {
			window.requestAnimationFrame(animateRam);
		}
	};

	const startRamAnimation = () => {
		if (animationStarted) {
			return;
		}

		animationStarted = true;
		animationStart = null;
		window.requestAnimationFrame(animateRam);
	};

	const checkRamAnimationStart = () => {
		if (disposed || animationStarted) {
			return;
		}

		const section = document.querySelector('.path-proof-section');

		if (!section) {
			return;
		}

		const sectionRect = section.getBoundingClientRect();
		const triggerPoint = window.innerHeight * 0.5;

		if (sectionRect.top <= triggerPoint && sectionRect.bottom >= triggerPoint) {
			startRamAnimation();
		}
	};

	const scheduleRamAnimationStartCheck = () => {
		if (startCheckFrame) {
			return;
		}

		startCheckFrame = window.requestAnimationFrame(() => {
			startCheckFrame = null;
			checkRamAnimationStart();
		});
	};

	placeRamOnPath(0);
	window.addEventListener('scroll', scheduleRamAnimationStartCheck, { passive: true });
	window.addEventListener('resize', scheduleRamAnimationStartCheck);
	window.addEventListener('load', scheduleRamAnimationStartCheck);
	window.addEventListener('pageshow', scheduleRamAnimationStartCheck);
	window.requestAnimationFrame(checkRamAnimationStart);

	return () => {
		disposed = true;
		window.removeEventListener('scroll', scheduleRamAnimationStartCheck);
		window.removeEventListener('resize', scheduleRamAnimationStartCheck);
		window.removeEventListener('load', scheduleRamAnimationStartCheck);
		window.removeEventListener('pageshow', scheduleRamAnimationStartCheck);

		if (startCheckFrame) {
			window.cancelAnimationFrame(startCheckFrame);
			startCheckFrame = null;
		}
	};
}
