<script lang="ts">
    import MainPage from './lib/MainPage.svelte';
    import EngineSelect from './lib/EngineSelect.svelte';
    import TOS from './lib/TOS.svelte'

    let [, page] = new URL(location.href).pathname.split('/');
</script>

<main>
    {#if page === 'tos'}
        <TOS />
    {:else if page === 'engineselect' || !localStorage.getItem('engine') && page !== 'tos'}
        <EngineSelect />
    {:else}
        <MainPage />
    {/if}

    <footer>
        <p>
            SOC is licensed under the GPL version 3 or later.<br /><a
                href="/engineselect/">Change your search engine preferences</a
            ><br /><a href="/tos">Terms of Service</a>
        </p>
    </footer>
</main>
