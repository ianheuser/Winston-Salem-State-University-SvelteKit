<script>
    import { handleLeadSubmit } from '$lib/scripts/lead-form.js';
    import { asset } from '$app/paths';
    let { heading,image,description,buttonLabel,imageAlt,thanksMessage } = $props();
</script>

<section class="flex inquiry-section" id="contact">
		<div class="campus-collage" aria-hidden="true">
			<img class="left" src={ asset("/images/landing-campus-left.jpg") } alt="" />
		</div>

		<div class="photo-card red">
			<div class="red-line"></div>
			<img src={ image } alt={ imageAlt } />
		</div>

		<div class="inquiry-copy flex column">
      <div class="form-message">
        <h1 class="form-status red">Thank you for your submission!</h1>
        <p class="form-status red">{thanksMessage}</p>
      </div>
      <div class="form-content">
        <h2 class="red">{heading}</h2>
        <p class="form-description">{description}</p>

        <form
          class="lead-form"
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
              <option value="">Select...</option>
              <option value="undecided">Undecided</option>
              <option value="mcst">Master of Science in Computer Science and Information Technology</option>
              <option value="masters">Masters Degrees</option>
              <option value="certificates">Certificates</option>
              <option value="doctoral">Doctoral Degrees</option>
            </select>
          </label>
          <button class="outline-button margin-top" type="submit">{buttonLabel}</button>
          
        </form>
      </div>
		</div>
	</section>

<style>

.form-message {
  display: none;
  text-align: center;
}
.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.margin-top {
  margin-top: 50px;
}

p.form-description {
    font-size: clamp(12px, 2.8vw, 21px);
    margin: 0px;
    width: 100%;
    padding: 0px 20px 30px;
}

.inquiry-section {
  overflow: hidden;
  background: var(--white);
  gap: 4vw;
  padding: 60px 24px 60px;
  min-height: 600px;
}

.inquiry-section::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 6px;
}

.campus-collage {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.campus-collage img {
  position: absolute;
  object-fit: cover;
}

.campus-collage .left {
  left: max(-175px, -12vw);
  top: 3px;
  width: clamp(260px, 42vw, 732px);
  opacity: 0.4;
}

.inquiry-section > .photo-card,
.inquiry-section > .inquiry-copy {
  position: relative;
  z-index: 2;
}

.inquiry-section > .photo-card {
  flex: 0 1 521px;
}

.inquiry-section > .inquiry-copy {
  flex: 0 1 600px;
}


.inquiry-copy {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.lead-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 90%;
}

.lead-form label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--muted);
  font-size: clamp(12px, 2.8vw, 21px);
  line-height: 1.5;
  text-align: left;
}

.lead-form b {
  color: #ed0131;
  font-weight: 400;
}

.lead-form input,
.lead-form select {
  width: 100%;
  min-height: 80px;
  padding: 18px 20px;
  border: 0;
  border-radius: 4px;
  background: var(--field);
  color: var(--black);
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 22px;
}




@media (max-width: 980px) {
  /* These only apply to screens 980px or less */

  .inquiry-copy {
    width: clamp(300px,70%,600px);
  }

  .inquiry-section {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

}


@media (max-width: 720px) {
/* When the screen is 720px or less, the below apply */

  .inquiry-section > .inquiry-copy {
    flex: 0 1 fit-content;
  }

  .inquiry-section .photo-card {
    display: none;
  }

  .inquiry-section .photo-card {
    order: 2;
    width: 248px;
    border-width: 3px;
    border-radius: 19px;
  }

  .inquiry-section .inquiry-copy {
    order: 1;
  }

  .lead-form {
    gap: 11px;
  }

  .lead-form input,
  .lead-form select {
    min-height: 48px;
    padding: 10px 12px;
    font-size: 16px;
  }

  .form-status {
    font-size: 13px;
  }

  .inquiry-section {
    padding-top: 32px;
  }


}

</style>