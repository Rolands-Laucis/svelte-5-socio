import { SocioServer } from "socio/core-server.js";
import {log, info, done} from 'socio/logging.js';

const PORT = 3000;

info('Socio server initializing...')
const ss = new SocioServer({ port: PORT }, {
    db: {},
    logging: { verbose: import.meta.env.DEV }
});