import { createStore } from './store';

export interface Client {
        init: boolean;
        client: any;
        accounts: any;
}

const defaultState: Client = { init: false, client: null, accounts: null };

export const [useClient] = createStore(defaultState);