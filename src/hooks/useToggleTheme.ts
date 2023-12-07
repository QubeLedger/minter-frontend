import { createStore } from './store';

interface Accordion {
  active: boolean;
  backgroundColor: string;
  headerColor: string;
  containerColor: string;
  containerTextColor: string;
  containerFieldColor: string;
  contrainerBorder: string;
  contrainerFieldsBorder: string;
}

const defaultState: Accordion = { 
    active: false, 
    backgroundColor: 'linear-gradient(#121212, #1f1f1f)', 
    headerColor: 'rgb(32,32,32)' ,
    containerColor: '#232323',
    containerTextColor: 'white',
    containerFieldColor: '#1a1a1a',
    contrainerBorder: '2px solid black',
    contrainerFieldsBorder: '3px solid #333'
};

export const [useToggleTheme] = createStore(defaultState);
