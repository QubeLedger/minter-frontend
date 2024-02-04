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
  inputBgColor: string;
  connectBtnColor: string;
  HoverColor: string;
  ModalHoverColor: string;
  modalBgColor: string;
  walletBgColor: string;
  walletInfoBgColor: string;
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
    inputBgColor: '#323232',
    connectBtnColor: 'rgb(50,50,50)',
    HoverColor: '#222222',
    ModalHoverColor: '#333333',
    modalBgColor: '#232323',
    walletBgColor: '#5F5F5F',
    walletInfoBgColor: "#323232"
};

export const ThemeWhiteState: Theme = { 
  active: true,
  backgroundColor: '#ecebeb',
  headerColor: '#d7d7d7',
  containerColor: '#ffffff',
  TextColor: '#333',
  FieldColor: '#ecebeb',
  Border: '2px solid #dbdbdb',
  FieldsBorder: '2px solid #dbdbdb',
  inputBgColor: '#ecebeb',
  connectBtnColor: '#ecebeb',
  HoverColor: '#e2e2e2',
  ModalHoverColor: '#ECECEC',
  modalBgColor: '#FFFFFF',
  walletBgColor: '#D9D9D9',
  walletInfoBgColor: "#F5F5F5"
};





export const [useToggleTheme] = createStore(ThemeDefaultState);



