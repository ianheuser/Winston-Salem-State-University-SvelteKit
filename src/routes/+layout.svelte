<script>
	import { onDestroy } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initNeonEffects } from '$lib/scripts/neon.js';

	let { children } = $props();

	// The neon flicker watches elements on the current page, so it restarts
	// after every client-side navigation once the new page is in the DOM.
	let cleanupNeon;

	afterNavigate(() => {
		cleanupNeon?.();
		cleanupNeon = initNeonEffects();
	});

	onDestroy(() => {
		cleanupNeon?.();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children()}

<Footer />
