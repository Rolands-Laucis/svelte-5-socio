<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { sc, room_data } from '$lib/socket.svelte'; // Import the updated function

	let { children } = $props();

    onMount(async () => {
        room_data.id = location.pathname.split("/")?.at(1) || ""; // Extract room_id from the URL
        console.log(`Room ID from URL: ${room_data.id}`, location.pathname, location.pathname.split("/"));
        if (room_data.id) {
            console.log(`Joining room ${room_data.id} as client ${sc.client_id}`);
            await sc.SubscribeProp(
                room_data.id,
                (r) => {
                    Object.assign(room_data, r);
                },
                { receive_initial_update: true },
            );

            joined = true;
        }
    })
</script>

{#if joined}
    {@render children()}
{:else}
    Joining room {room_data.id}...
{/if}

<style lang="css">

</style>