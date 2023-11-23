import { createStore } from './store';


interface AmountIn {
        amt: string;
}

const defaultState: AmountIn = { amt: "" };

export const [useAmountInStore] = createStore(defaultState);