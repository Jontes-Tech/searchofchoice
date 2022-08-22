<script lang="ts">
    const url = new URL(location.href);
    const query = url.searchParams.get('q');

    if (query) {
        location.href = localStorage.getItem('engine') + query;
    }

    let link = '';
    let q = '';

    $: link = 'https://searchofchoice.jontes.page/?q=' + encodeURIComponent(q);

    const shorten = async () => {
        const response = await fetch(`https://l.og.ax/${link}`);
        const short = await response.text();
        link = short;
    };
</script>

<div class="search-container">
    <form action={localStorage.getItem('engine')}>
        <h1>Search Of Choice</h1>
        <input
            bind:value={q}
            type="text"
            placeholder="Please enter a search term here..."
            name="q"
        />
        <br />
        <input bind:value={link} />
        <br />
        <button
            on:click={(e) => {
                e.preventDefault();
                shorten();
            }}>Shorten link (may decrease privacy)</button
        >
        <br />
        <br />
        <button>Search</button>
        <br />
    </form>
</div>
