import { createStore } from './store';

interface Theme {
  active: boolean;
  backgroundColor: string;
  headerColor: string;
  containerColor: string;
  TextColor: string;
  FieldColor: string;
  Border: string;
  FieldsBorder: string;
  modalBgColor: string;
  inputBgColor: string;
  connectBtnColor: string;
}

const defaultState: Theme = { 
    active: false, 
    backgroundColor: 'linear-gradient(#121212, #1f1f1f)', 
    headerColor: 'rgb(32,32,32)' ,
    containerColor: '#232323',
    TextColor: 'white',
    FieldColor: '#1a1a1a',
    Border: '2px solid black',
    FieldsBorder: '3px solid #333',
    modalBgColor: 'rgb(35,35,35)',
    inputBgColor: '#323232',
    connectBtnColor: 'rgb(50,50,50)',
};

export const [useToggleTheme] = createStore(defaultState);
