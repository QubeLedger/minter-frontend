import { createStore } from './store';
import USQLogo from "../assets/USQLogo.png";

interface Token {
        logo: string;
        base: string;
        type: string
}

const defaultState: Token = { logo: "", base: "Select token", type: "qasset" };

export const [useTokenTo] = createStore(defaultState);