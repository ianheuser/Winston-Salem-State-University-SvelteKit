<script>
    let { heading,subHeading,description,buttonLabel } = $props();
</script>

<section class="flex column find-a-path">
    <h2 class="red">{heading}</h2>
    <h3>{subHeading}</h3>
    <p>{description}</p>
    <a class="outline-button gold line" href="#contact">
        {buttonLabel}
    </a>
</section>

<style>


  .find-a-path .outline-button {
    width: clamp(400px, 30%, 400px);
    /* min-height: 50px; */
    /* font-size: 18px; */
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
@media (max-width: 550px) {

  .find-a-path .outline-button {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

}

</style>