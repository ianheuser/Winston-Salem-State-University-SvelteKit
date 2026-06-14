<script> 
let {major, programCode, degreeType, image} = $props();
</script>

<section class="flex program-hero">
    <div class="program-hero-image" aria-hidden="true" style:--hero-image={`url("${image}")`}></div>

    <div class="program-hero-content">
        <p class="program-code">{ programCode }</p>
        {#if degreeType == 'MS'}
            <h1 class="gold">Master<br />of Science</h1>
        {:else if degreeType = 'BS'}
            <h1 class="gold">Master<br />of Business</h1>
        {/if}
        <h3>in { major }</h3>
    </div>
</section>

<style>

    .program-hero {
        height: clamp(250px, 50vw, 650px);
        overflow: hidden;
        background: var(--black);
        color: var(--white);
        align-items: stretch;
        padding: 0px;
    }

    .program-hero h1 {
        margin: 0 0 26px;
    }

    .program-hero-image {
        flex: 1 1 50%;
        background: var(--hero-image) right / cover no-repeat;
    }

    .program-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex: 1 1 50%;
        flex-direction: column;
        min-height: inherit;
        align-items: flex-start;
        justify-content: center;
        padding-left: 3%;
        padding-right: 7%;
        text-align: left;
    }

    .program-hero::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 5px;
        background: var(--gold);
    }

@media (max-width: 720px){

  .program-hero-image {
    flex-basis: 50%;
    background-position: right;
  }

  .program-hero-content {
    flex-basis: 48%;
    min-height: 216px;
    padding: 0px 7% 0px 3%;
  }


  .program-hero h1 {
    margin-bottom: 12px;
  }

  .program-hero-content > p:last-child {
    font-size: 15px;
  }

}
</style>