import { createStore } from './store';


interface AmountIn {
        amt: string;
}

const defaultState: AmountIn = { amt: "0" };

export const [useAmountInStore] = createStore(defaultState);