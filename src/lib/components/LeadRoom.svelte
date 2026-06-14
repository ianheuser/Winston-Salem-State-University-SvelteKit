<script>
	import {asset} from '$app/paths'
</script>

<section class="flex column lead-room-section">
    <h2 class="white">Lead Every Room</h2>
    <p>
        Gain the skills, confidence, and real-world opportunities to advance your career through courses in cryptography, database management, hardware security, data science, and artifical intelligence.
    </p>

    <div class="image-contain">
        <img src={ asset("/images/program-lead.jpg") } alt="Graduate student working at a laptop" />
    </div>
</section>

<style>

.lead-room-section {
  overflow: hidden;
  padding: 50px 0 0;
  background: linear-gradient(180deg, var(--gold) 0%, var(--gold) 54%, rgba(215, 168, 14, 0.36) 74%, rgba(215, 168, 14, 0) 100%);
  text-align: center;
}

.lead-room-section img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 534/261;
}

.image-contain {
  position: relative;
  width: 100%;
}

.lead-room-section .image-contain::before {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 100px;
  background: linear-gradient(0deg, rgba(213, 35, 52, 0) 0%, rgba(211, 30, 50, 0.25) 34%, var(--gold) 100%);
  pointer-events: none;
}

.lead-room-section p {
  margin-bottom: 50px;
}

@media(max-width:720px){

    .lead-room-section {
        padding-top: 24px;
    }

    .lead-room-section p {
        margin-bottom: 25px;
    }

}
</style>