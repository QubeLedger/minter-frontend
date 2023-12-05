import { createStore } from './store';

interface Accordion {
  active: boolean;
  backgroundColor: string;
  headerColor: string;
  containerColor: string;
  containerTextColor: string;
  containerFieldColor: string;
}

const defaultState: Accordion = { 
    active: false, 
    backgroundColor: 'linear-gradient(#121212, #1f1f1f)', 
    headerColor: 'rgb(32,32,32)' ,
    containerColor: '#232323',
    containerTextColor: 'white',
    containerFieldColor: '#1a1a1a'
};

export const [useToggleTheme] = createStore(defaultState);
