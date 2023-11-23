import { createStore } from './store';


interface AmountOut {
        amt: string;
}

const defaultState: AmountOut = { amt: "0" };

export const [useAmountOutStore] = createStore(defaultState);