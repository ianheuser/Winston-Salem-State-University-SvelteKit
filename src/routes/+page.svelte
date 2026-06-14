<script>
	import { onMount } from 'svelte';
	import { initRamPathAnimation } from '$lib/scripts/animate-on-path.js';
	import { handleLeadSubmit } from '$lib/scripts/lead-form.js';

	onMount(() => initRamPathAnimation());
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
				<a class="neon-button gold" href="/programs/mcst">
					Masters Degrees
				</a>
				<p class="white">Build specialized skills that fit your goals</p>
			</div>
			<div class="program-type">
				<a class="neon-button blue" href="/programs/mcst">
					Certificates
				</a>
				<p class="white">Advance your expertise to lead in your field</p>
			</div>
			<div class="program-type">
				<a class="neon-button green" href="/programs/mcst">
					Doctoral Degrees
				</a>
				<p class="white">Earn the highest credential in your profession</p>
			</div>
		</div>
	</section>

	<section class="flex form-section landing" id="contact">
		<div class="campus-collage" aria-hidden="true">
			<img class="left" src="/images/landing-campus-left.jpg" alt="" />
			<!-- <img class="right" src="/images/landing-campus-right.jpg" alt="" /> -->
		</div>

		<div class="photo-card red">
			<div class="red-line"></div>
			<img src="/images/landing-form-photo.jpg" alt="Graduate student meeting with an advisor" />
		</div>

		<div class="inquiry-copy flex column">
			<h2 class="red">Ready to step into the room?</h2>
			<p>Tell us a little about yourself and our graduate team can help you plan your next move today.</p>

			<form
				class="lead-form"
				data-success-message="Thanks. Our graduate team will be in touch soon."
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

	<section class="flex column aid-band" id="financial-aid">
		<h2>Affordable. Attainable. Achievable.</h2>
		<p>Through scholarships, grants, and financial aid, we make pursuing your graduate degree a reality.</p>
	</section>

	<section class="flex column path-proof-section power-section" id="ram-path-proof" aria-label="Ram path animation proof">
		<h2 class="neon-on-scroll red-shadow red">The <span class="white">Power</span> of a<br />WSSU Graduate Degree</h2>

		<svg
			class="path-proof-svg"
			viewBox="-120 -140 1263 2380"
			role="img"
			aria-label="Ram head moving down the red vector path"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="path-proof-glow" x="-20%" y="-10%" width="140%" height="120%">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4.65" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			<path
				id="js-motion-path"
				class="path-proof-line"
				d="M992.615 -800C1007.8 17.9271 1016.26 326.748 971.523 430.072C827.811 762.038 194.708 563.048 194.708 858.925C194.708 1154.8 1016.9 1037.08 1000.65 1324.69C987.38 1559.71 276.999 1567.56 73.7895 1815.42C73.7895 1815.42 -52.1917 1942.53 73.7895 2500"
				fill="none"
				stroke="#da1f33"
				stroke-miterlimit="10"
				stroke-width="17"
			/>

			<!-- The "data-progress" attribute, set to 0.09 is telling it to light this bullet when the ram reaches 9% of the path. -->
			<text class="path-proof-bullet" data-progress="0.20" x="720" y="290" text-anchor="middle">
				<tspan x="450">Proven track record</tspan>
				<tspan x="450" dy="70">for career mobility</tspan>
			</text>
			<text class="path-proof-bullet" data-progress="0.33" x="245" y="600" text-anchor="middle">
				<tspan x="0">Higher earning</tspan>
				<tspan x="0" dy="70">potential</tspan>
			</text>
			<text class="path-proof-bullet" data-progress="0.45" x="760" y="850" text-anchor="middle">
				<tspan x="760">Direct access</tspan>
				<tspan x="760" dy="70">to employers</tspan>
				<tspan x="760" dy="70">in your field</tspan>
			</text>
			<text class="path-proof-bullet" data-progress="0.60" x="780" y="1350" text-anchor="middle">
				<tspan x="350">Affordable tuition</tspan>
			</text>
			<text class="path-proof-bullet" data-progress="0.85" x="245" y="1900" text-anchor="middle">
				<tspan x="500">Personalized support</tspan>
				<tspan x="500" dy="70">from faculty &amp; staff</tspan>
			</text>

			<image
				id="js-path-ram"
				class="path-proof-ram"
				href="/images/ram-head.png"
				x="-120"
				y="-109"
				width="240"
				height="218"
			/>
		</svg>
		<img class="red-blur right" src="/images/red-blur.png" alt="" />
		<img class="red-blur left" src="/images/red-blur.png" alt="" />
	</section>

	<section class="flex dean-quote">
		<img src="/images/dean-boykin.jpg" alt="Montrale Boykin, Dean, Graduate College" />
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
