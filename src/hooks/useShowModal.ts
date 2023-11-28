import { createStore } from './store';

interface Show {
  b: boolean;
}

const defaultState: Show = { b: false };

export const [useShowModalFrom] = createStore(defaultState);
export const [useShowModalTo] = createStore(defaultState);
export const [useShowWalletModal] = createStore(defaultState);
export const [useShowAlert] = createStore(defaultState);