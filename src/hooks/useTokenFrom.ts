import { createStore } from './store';
import AtomLogo from "../assets/svg/AtomLogo.svg"

interface Token {
        logo: string;
        base: string;
        type: string
}

const defaultState: Token = { logo: AtomLogo, base: "ATOM", type: "collateral" };

export const [useTokenFrom] = createStore(defaultState);