import { createStore } from './store';

interface Info {
  m_fee: string;
  b_fee: string;
  br: string
}

const defaultState: Info = { m_fee: "0", b_fee: "0", br: "0" };

export const [useInfoStore] = createStore(defaultState);