import { createStore } from './store';


export interface AmountIn {
        amt: string;
}

const defaultState: AmountIn = { amt: "" };

export const [useAmountInStore] = createStore(defaultState);