import { SocioClient } from "socio/core-client.js";

export const sc = new SocioClient({
    logging: { verbose: import.meta.env.DEV },
    reconnect_tries:0
});
export const room_data = $state({ id: '', players: {} });
