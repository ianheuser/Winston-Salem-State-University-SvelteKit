<script>
    import { handleLeadSubmit } from '$lib/scripts/lead-form.js';
</script>

<section class="flex form-section" id="contact">
    <div class="campus-collage" aria-hidden="true">
        <img class="left" src="/images/landing-campus-left.jpg" alt="" />
        <!-- <img class="right" src="/images/landing-campus-right.jpg" alt="" /> -->
    </div>

    <div class="photo-card red">
        <div class="red-line"></div>
        <img src="/images/MCST_lead_form_image.jpg" alt="Graduate student meeting with an advisor" />
    </div>

    <div class="inquiry-copy flex column">
        <h2 class="red">Let's Get You Started</h2>
        <p>Tell us a little about yourself and our graduate team will reach out soon.</p>

        <form
            class="lead-form"
            data-success-message="Thank you! Information is on the way. Watch your email for information about the MCST program and how WSSU graduate study prepares you to become a leader in your field."
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

<style>

.form-section {
  overflow: hidden;
  background: var(--white);
  gap: 4vw;
  padding: 60px 24px 60px;
}

.form-section::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--red);
}


.inquiry-copy > p {
  width: 100%;
}

.inquiry-copy {
  text-align: center;
  align-items: center;
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
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 26px;
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

/*
  Do the above instead of the below, paired with editing the html button

  .outline-button-gold {
    border-color: var(--gold);
    color: var(--gold);
  }

*/

.form-status {
  min-height: 1.4em;
  margin: 0;
  color: var(--red);
  font-size: 18px;
  text-align: center;
}

.form-section > .photo-card,
.form-section > .inquiry-copy {
  position: relative;
  z-index: 2;
}

.form-section > .photo-card {
  flex: 0 1 521px;
}

.form-section > .inquiry-copy {
  flex: 0 1 600px;
}

@media (max-width: 980px) {

  .inquiry-copy {
    width: clamp(300px,70%,600px);
  }

}

@media (max-width: 720px) {
/* When the screen is 720px or less, the below apply */
  
  .form-section > .inquiry-copy {
    flex: 0 1 fit-content;
  }

  .form-section .inquiry-copy {
    order: 1;
  }

}

</style>