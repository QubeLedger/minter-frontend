import { createStore } from './store';


interface Coin {
        amt: string;
        denom: string
}

const defaultState: Coin = { amt: "0", denom: "" };

export const [useBalanceStore] = createStore(defaultState);