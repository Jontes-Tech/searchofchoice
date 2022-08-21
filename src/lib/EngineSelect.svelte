<script lang="ts">
    const setEngine = (url:string) => {
        localStorage.setItem("engine", url)
        location.href = "/"
    }
</script>
<p>
  Please choose a <strong>search engine</strong>. This will be remembered in your browser.
</p>
<button on:click={() => setEngine("https://searx.tiekoetter.com/search?q=")}>Tiekoetter.com SearX Instance</button>
<button on:click={() => setEngine("https://google.com/search?q=")}>Google</button>
<button on:click={() => setEngine("https://duckduckgo.com/?q=")}>DuckDuckGo</button>
<button on:click={() => setEngine("https://qwant.com/?q=")}>Qwant</button>
<button on:click={() => alert("Not implemented :(")}>Custom</button>
