import { createStore } from './store';

export interface Wallet {
        init: boolean;
        wallet: any;
        type: string
}

const defaultState: Wallet = { init: false, wallet: null, type: "" };

export const [useWallet] = createStore(defaultState);