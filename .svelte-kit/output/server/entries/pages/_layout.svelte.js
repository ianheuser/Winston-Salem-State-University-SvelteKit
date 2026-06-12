import { n as onDestroy } from "../../chunks/index-server.js";
import { g as attr, n as head } from "../../chunks/server.js";
import { t as afterNavigate } from "../../chunks/client.js";
//#region src/lib/assets/favicon.svg
var favicon_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
//#endregion
//#region src/lib/components/Header.svelte
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<header class="site-header"><a class="brand" href="/" aria-label="Winston-Salem State University Graduate College home"><img src="/images/new-logo.png" class="main-logo" alt="Winston-Salem State University Graduate College"/></a> <nav class="desktop-nav" aria-label="Primary navigation"><a href="/programs/mcst">Programs</a> <a href="#financial-aid">Financial Aid</a> <a class="nav-contact" href="#contact">Contact</a></nav> <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span> <span></span> <span></span></button></header> <nav class="mobile-nav" aria-label="Mobile navigation" hidden=""><a href="/programs/mcst">Programs</a> <a href="#financial-aid">Financial Aid</a> <a href="#contact">Contact</a></nav>`);
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="site-footer"><a class="footer-brand" href="/"><img src="/images/centered-logo.png" alt="Winston-Salem State University"/></a> <address>601 S. Martin Luther King Jr. Drive<br/> Winston-Salem, NC 27110 <span>|</span> 336-750-2000</address> <div class="social-links" aria-label="Social links"><a href="https://www.facebook.com/WSSU1892" aria-label="Facebook"><img src="/images/facebook.png" alt="Facebook Logo"/></a> <a href="http://www.instagram.com/wssu1892" aria-label="Instagram"><img src="/images/instagram.png" alt="Instagram Logo"/></a> <a href="https://www.youtube.com/wssu1892" aria-label="YouTube"><img src="/images/youtube.png" alt="You Tube Logo"/></a> <a href="https://www.linkedin.com/company/winston-salem-state-university/" aria-label="LinkedIn"><img src="/images/linked-in.png" alt="LinkedIn Logo"/></a></div></footer>`);
}
//#endregion
//#region src/lib/scripts/neon.js
function initNeonEffects() {
	const neonScrollSelectors = [
		"h1",
		"h2",
		".flicker"
	].join(",");
	const neonTargets = document.querySelectorAll(neonScrollSelectors);
	let neonObserver;
	let disposed = false;
	const getNeonViewport = () => ({
		top: window.scrollY,
		bottom: window.scrollY + window.innerHeight
	});
	let lastNeonViewport = getNeonViewport();
	neonTargets.forEach((target) => {
		target.classList.add("neon-on-scroll");
	});
	const lightNeonTarget = (target) => {
		target.classList.add("neon-lit");
		if (neonObserver) neonObserver.unobserve(target);
	};
	const revealNeonTargetsInRange = (rangeTop, rangeBottom) => {
		const viewportBuffer = 12;
		neonTargets.forEach((target) => {
			if (target.classList.contains("neon-lit")) return;
			const rect = target.getBoundingClientRect();
			const targetTop = rect.top + window.scrollY;
			if (targetTop + rect.height >= rangeTop - viewportBuffer && targetTop <= rangeBottom + viewportBuffer) lightNeonTarget(target);
		});
	};
	const checkNeonViewport = () => {
		const currentViewport = getNeonViewport();
		revealNeonTargetsInRange(Math.min(lastNeonViewport.top, currentViewport.top), Math.max(lastNeonViewport.bottom, currentViewport.bottom));
		lastNeonViewport = currentViewport;
	};
	let neonScrollFrame;
	const scheduleNeonViewportCheck = () => {
		if (disposed || neonScrollFrame) return;
		neonScrollFrame = window.requestAnimationFrame(() => {
			neonScrollFrame = null;
			checkNeonViewport();
		});
	};
	let neonResizeTimer;
	const restartAllNeonFlickers = () => {
		neonTargets.forEach((target) => {
			lightNeonTarget(target);
			target.style.animation = "none";
		});
		document.body.offsetHeight;
		neonTargets.forEach((target) => {
			target.style.animation = "";
		});
	};
	const scheduleNeonResizeFlicker = () => {
		window.clearTimeout(neonResizeTimer);
		neonResizeTimer = window.setTimeout(() => {
			neonResizeTimer = null;
			window.requestAnimationFrame(restartAllNeonFlickers);
		}, 160);
	};
	if ("IntersectionObserver" in window) {
		neonObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					lightNeonTarget(entry.target);
					observer.unobserve(entry.target);
				}
			});
		}, {
			rootMargin: "0px",
			threshold: 0
		});
		neonTargets.forEach((target) => neonObserver.observe(target));
	} else neonTargets.forEach((target) => {
		lightNeonTarget(target);
	});
	window.addEventListener("scroll", scheduleNeonViewportCheck, { passive: true });
	window.addEventListener("resize", scheduleNeonResizeFlicker);
	window.addEventListener("orientationchange", scheduleNeonViewportCheck);
	window.addEventListener("load", scheduleNeonViewportCheck);
	window.addEventListener("pageshow", scheduleNeonViewportCheck);
	window.requestAnimationFrame(checkNeonViewport);
	if ("fonts" in document) document.fonts.ready.then(scheduleNeonViewportCheck);
	document.querySelectorAll("img").forEach((image) => {
		if (!image.complete) image.addEventListener("load", scheduleNeonViewportCheck, { once: true });
	});
	return () => {
		disposed = true;
		window.removeEventListener("scroll", scheduleNeonViewportCheck);
		window.removeEventListener("resize", scheduleNeonResizeFlicker);
		window.removeEventListener("orientationchange", scheduleNeonViewportCheck);
		window.removeEventListener("load", scheduleNeonViewportCheck);
		window.removeEventListener("pageshow", scheduleNeonViewportCheck);
		if (neonScrollFrame) {
			window.cancelAnimationFrame(neonScrollFrame);
			neonScrollFrame = null;
		}
		window.clearTimeout(neonResizeTimer);
		if (neonObserver) neonObserver.disconnect();
	};
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		let cleanupNeon;
		afterNavigate(() => {
			cleanupNeon?.();
			cleanupNeon = initNeonEffects();
		});
		onDestroy(() => {
			cleanupNeon?.();
		});
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.push(`<link rel="icon"${attr("href", favicon_default)}/>`);
		});
		Header($$renderer, {});
		$$renderer.push(`<!----> `);
		children($$renderer);
		$$renderer.push(`<!----> `);
		Footer($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _layout as default };
