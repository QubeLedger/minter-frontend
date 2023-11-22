import { createStore } from './store';

interface ConnectKeplrWalletStore {
  connected: boolean;
}

const defaultState: ConnectKeplrWalletStore = { connected: false };

export const [useConnectKeplrWalletStore] = createStore(defaultState);