<script>
    let { heading, paragraph } = $props();
</script>

<section class="flex column headingAndText ">
    <h2>{heading}</h2>
    <p>{paragraph}</p>
</section>

<style>

.headingAndText {
  padding: 60px 0 68px;
  background: var(--red);
  color: var(--white);
  text-align: center;
}

.headingAndText p {
  width: clamp(300px, 70%, 750px);
  margin: 0 auto;
}

@media (max-width: 720px){

  .headingAndText {
    padding: 17px 0 23px;
  }

}

</style>