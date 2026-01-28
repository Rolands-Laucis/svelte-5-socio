<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "$lib/assets/global.css";
	
    import { onMount, onDestroy } from 'svelte';
	let { children } = $props();

    import { sc, room_data } from '$lib/socket.svelte'; // Import the updated function
    import { log } from 'socio/logging.js';

    onMount(async () => {
        log('Connecting...');
        await sc.Connect({
            url: "ws://localhost:3000"
        });
    });
    onDestroy(() => {
        if(room_data.players.hasOwnProperty(sc.client_id)){
            delete room_data.players[sc.client_id];
            sc.SetProp(room_data.id, room_data);
        }
        sc.UnsubscribeAll();
        sc.Close();
    });

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if sc.ready()}
    {@render children()}
{:else}
    <p>Connecting to server...</p>
{/if}
