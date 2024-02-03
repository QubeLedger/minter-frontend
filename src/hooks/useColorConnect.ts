import { createStore } from './store';

export interface Wallet {
        color: string;
        border: string;
}

const defaultState: Wallet = { 
    color: 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))',
    border: 'none'
    };

export const [useColorConnect] = createStore(defaultState);