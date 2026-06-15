<script>
    // Default values
    let { stats = 
        [
			{
				value: '99%',
				description: 'job or doctoral placement rate'
			},
			{
				value: '22%',
				description: 'projected growth in computing careers'
			},
			{
				value: '67%',
				description: 'of graduate students receive paid research assistantships'
			}
		] } = $props();
</script>

<section class="flex stats-band">
    <div class="stats-grid">

        {#each stats as stat}
            <div class="stat-stack">
                <div class="stats flicker">{stat.value}</div>
                <p>{stat.description}</p>
            </div>
        {/each}

    </div>
</section>

<style>

.stats-band {
  padding: 62px 0 66px;
  background: var(--black);
  color: var(--white);
  text-align: center;
}

.stats-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 58px;
}

.stat-stack {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}

.stats-grid > div {
  flex: 1 1 260px;
}

.stats {
  display: block;
  color: var(--gold);
  font-family: "Tilt Neon", sans-serif;
  font-size: clamp(54px, 6vw, 96px);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

@media( max-width: 980px ) {

  .stats-grid {
    gap: 24px;
  }

}

@media( max-width: 720px ) {
  
  .stats-band {
    padding: 24px 0 25px;
  }

  .stats-grid {
    flex-wrap: nowrap;
    gap: 8px;
    width: min(100% - 28px, 590px);
  }

  .stats-grid > div {
    flex-basis: 0;
  }

  .stats {
    font-size: 30px;
  }

}
</style>