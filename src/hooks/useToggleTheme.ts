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

export const ThemeDefaultState: Theme = { 
    active: false, 
    backgroundColor: 'linear-gradient(#121212, #1f1f1f)', 
    headerColor: 'rgb(32,32,32)' ,
    containerColor: '#232323',
    TextColor: 'white',
    FieldColor: '#1a1a1a',
    Border: '2px solid #2f2f2f',
    FieldsBorder: '2px solid #333',
    modalBgColor: 'rgb(35,35,35)',
    inputBgColor: '#323232',
    connectBtnColor: 'rgb(50,50,50)',
};

export const ThemeWhiteState: Theme = { 
  active: true,
  backgroundColor: '#ecebeb',
  headerColor: 'transparent',
  containerColor: '#ffffff',
  TextColor: '#333',
  FieldColor: '#ecebeb',
  Border: '2px solid #dbdbdb',
  FieldsBorder: '2px solid #dbdbdb',
  modalBgColor: '#ffffff',
  inputBgColor: '#ecebeb',
  connectBtnColor: '#ecebeb',
};





export const [useToggleTheme] = createStore(ThemeDefaultState);



