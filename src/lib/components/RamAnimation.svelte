<script>
    import { asset } from '$app/paths';
    import { onMount } from 'svelte';
    import { initRamPathAnimation } from '$lib/scripts/animate-on-path.js';

    onMount(() => initRamPathAnimation());
</script>

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
            href={asset("/images/ram-head.png")}
            x="-120"
            y="-109"
            width="240"
            height="218"
        />
    </svg>
    <img class="red-blur right" src={ asset("/images/red-blur.png") } alt="" />
    <img class="red-blur left" src={ asset("/images/red-blur.png") } alt="" />
</section>

<style>

:global(body.animation-proof-page) {
  min-height: 100svh;
  overflow-x: hidden;
  background: var(--black);
}

.path-proof-section {
  display: none;
  padding: 24px;
  place-items: center;
  background: var(--black);
}

.path-proof-svg {
  display: block;
  max-width: 600px;
  width: 67vw;
  overflow: visible;
  position: relative;
  right: -75px;
  top: -55px;
}

.path-proof-line {
  filter: url("#path-proof-glow");
  
}
.path-proof-bullet {
  fill: var(--white);
  opacity: 0.58;
  font-family: "Tilt Neon", Arial, sans-serif;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0;
  paint-order: stroke fill;
  transition:
    filter 220ms ease,
    opacity 220ms ease;
}

:global(.path-proof-bullet.is-lit) {
  opacity: 1;
  filter:
    drop-shadow(0 0 3px rgba(255, 255, 255, 0.9))
    drop-shadow(0 0 13px var(--red))
}

.path-proof-ram {
  filter:
    drop-shadow(0 0 8px rgba(255, 255, 255, 0.34))
    drop-shadow(0 0 16px rgba(255, 198, 204, 0.9));
}

.red-blur {
  position: absolute;
  width: 30vw;
  opacity: .75;
  height: 80%;
}

.red-blur.left {
  left: -12vw;
  rotate: 180deg;
  top: 30%;
}

.red-blur.right {
  right: -12vw;
}

@media (max-width: 980px) {
  
    .path-proof-svg {
        display: block;
        max-width: 700px;
        width: 67vw;
        overflow: visible;
        position: relative;
        right: -40px;
        top: -55px;
    }

}
</style>