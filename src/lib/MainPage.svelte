<script lang="ts">
  const url = new URL(location.href);
  const query = url.searchParams.get("q");

  if (query) {
    location.href = localStorage.getItem("engine") + query;
  }

  let link = "";
  let q = "";

  $: link = "https://searchofchoice.jontes.page/?q=" + encodeURIComponent(q);
</script>
  <div class="search-container">
    <form action={localStorage.getItem("engine")}>
      <h1>Search Of Choice</h1>
      <input
        bind:value={q}
        type="text"
        placeholder="Please enter a search term here..."
        name="q"
      />
      <br />
      <input bind:value={link} />
      <!-- <button on:click={(e) => {e.preventDefault(); alert("Not implemented")}}>Shorten link</button> -->
    </form>
  </div>

<style>
  * {
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  .search-container {
    max-width: 600px;
    margin: 50px auto;
  }
  button {
    margin: 10px
  }
  input {
    display: block;
    width: calc(100% - 24px);
    font-size: 18px;
    font-weight: 600;
    color: #e8e8e8;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #4b00ff;
  }
</style>
