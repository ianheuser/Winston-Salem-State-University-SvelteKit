<script>
	import { handleLeadSubmit } from '$lib/scripts/lead-form.js';
	import ProgramHero from '$lib/components/ProgramHero.svelte';
	import InnovatorsCareerPaths from '$lib/components/InnovatorsCareerPaths.svelte';
    import StatRow from '$lib/components/StatRow.svelte';
    import RealWorldApplication from '$lib/components/RealWorldApplication.svelte';
    import HeadingAndText from '$lib/components/HeadingAndText.svelte';
    import FinancialAid from '$lib/components/FinancialAid.svelte';
    import FindAPath from '$lib/components/FindAPath.svelte';
	import { asset } from '$app/paths';
</script>

<svelte:head>
	<title>Master of Science in Computer Science and Technology | WSSU</title>
	<meta
		name = "description"
		content = "Explore the Master of Science in Computer Science and Technology program at Winston-Salem State University."
	/>
</svelte:head>

<main>

	<ProgramHero
		heading = "Certificate" 
		subHeading = "in Data Analytics"
		programCode = "DA"
		image = { asset('/images/data-analytics-hero.jpg') }
	></ProgramHero>

	<HeadingAndText 
		heading = "Data Analytics (Post-Bacc Certificate)"
		paragraph = "Boost your BS or BA degree with a Certificate in Data Analytics in just 12 semester hours. The program is designed for professionals in healthcare, computer science, business, education, or those working in any other field who want to advance their data analytical abilities."
	></HeadingAndText>

	<section class="flex inquiry-section" id="contact">
		<div class="campus-collage" aria-hidden="true">
			<img class="left" src={ asset("/images/landing-campus-left.jpg") } alt="" />
		</div>

		<div class="photo-card red">
			<div class="red-line"></div>
			<img src={ asset("/images/data-analytics-lead-form.jpg") } alt="Graduate student meeting with an advisor" />
		</div>

		<div class="inquiry-copy flex column">
			<h2 class="red">Let's Get You Started</h2>
			<p>Tell us a little about yourself and our graduate team will reach out soon.</p>

			<form
				class="lead-form"
				data-success-message="Thank you! Information is on the way. Watch your email for information about the Certificate in Data Analytics program and how WSSU graduate study prepares you to become a leader in your field."
				onsubmit={handleLeadSubmit}
			>
				<label>
					<span>Name <b>*</b></span>
					<input name="name" autocomplete="name" required />
				</label>
				<label>
					<span>Email <b>*</b></span>
					<input name="email" type="email" autocomplete="email" required />
				</label>
				<label>
					<span>Program of Interest <b>*</b></span>
					<select name="program" required>
						<option>Undecided</option>
						<option>Master of Science in Computer Science and Technology</option>
						<option>Masters Degrees</option>
						<option>Certificates</option>
						<option>Doctoral Degrees</option>
					</select>
				</label>
				<button class="outline-button" type="submit">Submit</button>
				<p class="form-status" role="status" aria-live="polite"></p>
			</form>
		</div>
	</section>

	<InnovatorsCareerPaths></InnovatorsCareerPaths>
	<StatRow
		stats = {[
			{
				value: '21%',
				description: 'job growth from 2024 to 2034'
			}
		]}
	></StatRow>
	
	<RealWorldApplication
		heading = "Lead Every Room"
		paragraph = "Gain the skills, confidence, and real-world opportunities to advance your career through courses in foundational analytics, data mining, big data analytics, and data visualization."
		image = { asset('/images/data-analytics-real-world-application.jpg') }
	></RealWorldApplication>

	<FinancialAid
		heading = "Affordability without Compromise"
		paragraph = "Our graduate programs are among the most affordable in the Piedmont Triad region. From competitive tuition and financial aid to paid research assistantships funded through faculty grants, we offer options that put your graduate degree within reach."
	></FinancialAid>

	<FindAPath
		heading = "Depart to Serve"
		subHeading = "The Experts &amp; Support Every Community Deserves."
		description = 'Join WSSUs "Ramily" network of 24,000 alumni and build lasting professional connection through corporate partnerships and the Association for Computing Machinery.'
		buttonLabel = "Let's Find a Path That Fits You"
	></FindAPath>

</main>
