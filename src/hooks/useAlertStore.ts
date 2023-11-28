import { createStore } from './store';
import { AlertColor } from "@mui/material/Alert";

export interface AlertType {
        Type: AlertColor;
        Text: string;
        Color: AlertColor;
        Tx: string;
}

export interface Alerts {
        alerts: AlertType[]
}

const defaultState: Array<AlertType> = [
];

export const [useAlertStore] = createStore(defaultState);