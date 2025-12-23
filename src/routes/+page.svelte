<script lang="ts">
    import { onMount } from 'svelte';
    
    import {SocioClient} from "socio/core-client.js";

    const sc = new SocioClient({
        logging: {verbose: import.meta.env.DEV}
    });
    let clientId: string = $state('');

    onMount(async () => {
        await sc.Connect({
            url: "ws://localhost:3000"
        });
        await sc.ready();
        clientId = sc.client_id;
    });
</script>

<h1>Welcome to Socio!</h1>
<p>Client ID: {clientId}</p>

<style>

</style>