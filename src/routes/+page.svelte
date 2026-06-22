<script>
	import { resolve, asset } from '$app/paths';
	import RamAnimation from '$lib/components/RamAnimation.svelte';
    import InquiryForm from '$lib/components/InquiryForm.svelte';
</script>

<svelte:head>
	<title>Winston-Salem State University Graduate College</title>
	<meta
		name="description"
		content="Explore graduate degrees, certificates, and doctoral programs at Winston-Salem State University."
	/>
</svelte:head>

<main>
	<section class="flex column landing-hero">
		<div class="hero-art" aria-hidden="true"></div>
		<h1 class="hero-title">Be the Ram in the Room</h1>
	</section>

	<section class="flex column program-finder" id="programs">
		<h2>Find the program<br />that prepares you to lead</h2>

		<div class="program-type-grid" aria-label="Program types">
			<div class="program-type">
				<a class="neon-button gold" href={ resolve("/programs/mcst") }>
					Masters Degrees
				</a>
				<p class="white">Build specialized skills that fit your goals</p>
			</div>
			<div class="program-type">
				<a class="neon-button blue" href={ resolve("/programs/mcst") }>
					Certificates
				</a>
				<p class="white">Advance your expertise to lead in your field</p>
			</div>
			<div class="program-type">
				<a class="neon-button green" href={ resolve("/programs/mcst") }>
					Doctoral Degrees
				</a>
				<p class="white">Earn the highest credential in your profession</p>
			</div>
		</div>
	</section>

	<InquiryForm
		heading = "Ready to Step Into the Room?"
		description = "Tell us a little about yourself and our graduate team can help you plan your next move."
		buttonLabel = "Submit"
		image = { asset('/images/landing-form-photo.jpg') }
		imageAlt = "Graduate student meeting with an advisor"
		thanksMessage = "A member of our admissions team will be in touch soon with details about our programs."
	></InquiryForm>

	<section class="flex column aid-band" id="financial-aid">
		<h2>Affordable. Attainable. Achievable.</h2>
		<p>Through scholarships, grants, and financial aid, we make pursuing your graduate degree a reality.</p>
	</section>

	<RamAnimation />

	<section class="flex dean-quote">
		<img src={ asset("/images/dean-boykin.jpg") } alt="Montrale Boykin, Dean, Graduate College" />
		<blockquote>
			<p>
				At WSSU, you'll be prepared and ready to lead in any room you enter. If you're looking for real economic
				opportunity, social mobility, and a community of students and educators driving change, this is your
				university!
			</p>
			<cite>Montrale Boykin | Dean, Graduate College</cite>
		</blockquote>
	</section>
</main>
