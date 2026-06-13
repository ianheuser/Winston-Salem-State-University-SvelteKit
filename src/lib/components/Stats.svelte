


<script>
    // expects 
    // stats = [{value:0,description:'awesome'}]
    let { stats = [] } = $props();
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