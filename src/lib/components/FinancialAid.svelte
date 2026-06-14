<script>
    let { heading, paragraph } = $props();
</script>

<section class="flex column affordability" id="financial-aid" >
    <h2 class="red">{heading}</h2>
    <p>{paragraph}</p>
</section>

<style>

.affordability {
  background: var(--black);
  color: var(--white);
}

@media (max-width: 720px){

  .affordability {
    padding: 25px 0 30px;
  }

}

</style>