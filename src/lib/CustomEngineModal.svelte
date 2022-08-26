<script lang="ts">
    export let close: () => void;
    export let setEngine: (engine: string) => void;

    let engineURL = '';
</script>

<h3>Enter a custom engine URL</h3>
<input
    type="text"
    placeholder="https://example.org/?q="
    bind:value={engineURL}
/>
<div class="btns">
    <button on:click={close}> Cancel </button>
    <button class="submit-btn" on:click={() => setEngine(engineURL)}>
        Submit
    </button>
</div>

<style>
    .btns {
        margin-top: 0.1em;
    }
    .submit-btn {
        background-color: #4b00ff;
    }
</style>
