<script>
	import { handleLeadSubmit } from '$lib/scripts/lead-form.js';
	import ProgramHero from '$lib/components/ProgramHero.svelte';
	import InnovatorsCareerPaths from '$lib/components/InnovatorsCareerPaths.svelte';
    import StatRow from '$lib/components/StatRow.svelte';
    import RealWorldApplication from '$lib/components/RealWorldApplication.svelte';
    // import HeadingAndText from '$lib/components/HeadingAndText.svelte';
    import FinancialAid from '$lib/components/FinancialAid.svelte';
    import FindAPath from '$lib/components/FindAPath.svelte';
	import { asset } from '$app/paths';
	import InquiryForm from '$lib/components/InquiryForm.svelte';
</script>

<svelte:head>
	<title>Master of Science in Computer Science and Information Technology | WSSU</title>
	<meta
		name = "description"
		content = "Explore the Master of Science in Computer Science and Information Technology program at Winston-Salem State University."
	/>
</svelte:head>

<main>
	<ProgramHero
		heading = { "Master \n of Science" }
		subHeading = "in Computer Science and Information Technology" 
		programCode = "MCST"
		image = { asset('/images/mcst-hero.jpg') }
	></ProgramHero>
	
	<!--
		<HeadingAndText 
			heading = "5-Year (4+1) BS to MS MCST"
			paragraph = "The 4+1 program lets qualified WSSU Computer Science majors complete both degrees in five years - saving time and tuition."
		></HeadingAndText>
	-->

	<InquiryForm
		heading = "Let's Get You Started"
		description = "Tell us a little about yourself and our graduate team will reach out soon."
		buttonLabel = "Submit"
		image = { asset('/images/mcst-lead-form.jpg') }
		imageAlt = "Graduate student meeting with an advisor"
		thanksMessage = "Watch your inbox for details about the MCST program and see how WSSU graduate study lights your path to become tomorrows expert."
	></InquiryForm>
		
	<InnovatorsCareerPaths
		innovationBullets = {[
			"Evening classes",
			"Faculty mentorship",
			"Real-world projects",
			"State-of-the-art labs"
		]}

		careerPaths = {[
			"Cybersecurity Manager",
			"Data Scientist",
			"Senior Software Developer",
			"Network Architect",
			"Researcher or Educator"
		]}
	></InnovatorsCareerPaths>

	<StatRow
		stats = {[
			{
				value: '99%',
				description: 'job or doctoral placement rate'
			},
			{
				value: '22%',
				description: 'projected growth in computing careers'
			},
			{
				value: '67%',
				description: 'of graduate students receive paid research assistantships'
			}
		]}
	></StatRow>
	
	<RealWorldApplication
		heading = "Lead Every Room"
		paragraph = "Gain the skills, confidence, and real-world opportunities to advance your career through courses in cryptography, database management, hardware security, data science, and artifical intelligence."
		image = { asset('/images/mcst-real-world.jpg') }
	></RealWorldApplication>

	<FinancialAid
		heading = "Affordability without Compromise"
		paragraph = "Our graduate programs are among the most affordable in the Piedmont Triad region. From competitive tuition and financial aid to paid research assistantships funded through faculty grants, we offer options that put your graduate degree within reach."
	></FinancialAid>

	<FindAPath
		heading = "Depart to Serve"
		subHeading = "The Experts &amp; Support Every Community Deserves."
		description = 'Join WSSUs "Ramily" network of 24,000 alumni and build lasting professional connections through corporate partnerships and the Association for Computing Machinery.'
		buttonLabel = "Let's Find a Path That Fits You"
	></FindAPath>

</main>
