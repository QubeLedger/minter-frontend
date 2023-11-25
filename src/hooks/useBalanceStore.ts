import { createStore } from './store';


export interface Coin {
        amt: string;
        denom: string;
}

export interface Coins {
        coins: Coin[]
}

const defaultState: Coin = { amt: "0", denom: "" };
const defaultStateBalances: Array<Coin> = [];

export const [useBalanceStore] = createStore(defaultState);
export const [useBalancesStore] = createStore(defaultStateBalances);