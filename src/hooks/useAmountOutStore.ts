import { createStore } from './store';


interface AmountOut {
        amt: string;
}

const defaultState: AmountOut = { amt: "" };

export const [useAmountOutStore] = createStore(defaultState);