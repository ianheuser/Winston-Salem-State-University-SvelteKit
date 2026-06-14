


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
        <!---
            <div class="stat-stack">
                <div class="stats flicker">98%</div>
                <p>job or doctoral placement rate</p>
            </div>
            <div class="stat-stack">
                <div class="stats flicker">22%</div>
                <p>projected growth in computing careers</p>
            </div>
            <div class="stat-stack">
                <div class="stats flicker">67%</div>
                <p>of graduate students receive paid research assistantships</p>
            </div>
        -->
        {#each stats as stat}
            <div class="stat-stack">
                <div class="stats flicker">{stat.value}</div>
                <p>{stat.description}</p>
            </div>
        {/each}

    </div>
</section>