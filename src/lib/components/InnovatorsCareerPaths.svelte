<script>
    let { innovationBullets , careerPaths} = $props();
	import {asset} from '$app/paths'
</script>

<section class="flex innovators-section">
    <div class="innovators-copy flex column">
        <h2 class="white red-shadow">
            Innovators.
            <br />
            Problem-Solvers.
            <br />
            Visionaries.
        </h2>
        <ul>
            {#each innovationBullets as bullet}
                <li>{ bullet }</li>
            {/each}
        </ul>
    </div>

    <div class="photo-card red">
        <img src={ asset("/images/innovators.jpg") } alt="Students collaborating in a lab" />
    </div>
    </section>

    <section class="flex career-paths">
    <div class="section-inner">
        <h2 class="gold">One Degree. Multiple Career Paths.</h2>
        <ul>
            {#each careerPaths as path}
                <li>{ path }</li>
            {/each}
        </ul>
    </div>
</section>

<style>


    .innovators-section {
        flex-wrap: nowrap;
        gap: clamp(5px, 2vw, 110px);
        padding-inline: 24px;
        background: radial-gradient(circle at 58% 54%, rgba(255, 38, 61, 0.72) 0 12%, rgba(255, 38, 61, 0.24) 22%, rgba(0, 0, 0, 0) 34%), var(--black);
        color: var(--white);
        overflow: visible;
    }

    .innovators-copy {
        flex: 0 1 520px;
        align-items: center;
        text-align: center;
    }

    .innovators-section .photo-card {
        flex: 0 1 580px;
    }

    .innovators-copy ul {
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: clamp(22px, 2.4vw, 31px);
        font-weight: 800;
    }

    .career-paths {
        padding: 96px 0 112px;
        background: var(--white);
        text-align: center;
    }

    .career-paths ul {
        display: flex;
        flex-direction: column;
        gap: 19px;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: clamp(22px, 2.6vw, 37px);
        line-height: 1;
    }

    .career-paths ul li:not(:last-child)::after, .innovators-copy ul li:not(:last-child)::after {
        content: "";
        display: block;
        width: 18px;
        height: 4px;
        margin: 19px auto 0;
        background: var(--red);
    }

@media (max-width: 980px){

    .innovators-section .photo-card {
        bottom: -250px;
        position:absolute;
        border-width: 3px;
        border-radius: 19px;
        aspect-ratio: 250 / 300;
        height: 500px;
        display: flex;
    }

    .innovators-section {
        padding-bottom: 270px;
    }

    .career-paths {
        padding-top: 270px;
    }
}

@media (max-width: 720px){


    .innovators-section {
        padding-bottom: 270px;
    }

    .career-paths {
        padding-top: 270px;
    }

    .innovators-copy ul {
        gap: 11px;
        font-size: 15px;
    }

    .career-paths {
        padding: 250px 0 45px;
    }

    .career-paths ul {
        gap: 10px;
        font-size: 16px;
    }

    .career-paths li:not(:last-child)::after {
        width: 10px;
        height: 2px;
        margin-top: 10px;
    }

}


@media (max-width: 550px) {

  .innovators-section .photo-card.red {
    height: 300px;
    bottom: -150px;
  }

  .innovators-section {
    padding-bottom: 170px;
  }

  .career-paths {
    padding-top: 170px;
  }

}

</style>