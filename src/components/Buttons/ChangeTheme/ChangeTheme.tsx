import styled from 'styled-components'
import Sun from '../../../assets/svg/sun.svg'
import Moon from '../../../assets/svg/Moon.svg'
import { useToggleTheme } from '../../../hooks/useToggleTheme'



const SwapButton= styled.button`
    width: 35px;
    margin-right: 65px;
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 50px;
`

const BlackThemeIcon = styled.svg  <{ArrrowColor: string}>`
    background: url(${props => props.ArrrowColor});
    height: 28px;
    width: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    @media (max-width: 500px){
        margin-right: 26px;
    }
`


export const ChengeTheme = () => {

    const [theme, setTheme] = useToggleTheme();
    

    function toggleTheme () {
        if(theme.active == false) {
            setTheme({
                active: true,
                backgroundColor: '#ecebeb',
                headerColor: 'transparent',
                containerColor: '#ffffff',
                TextColor: '#333',
                FieldColor: '#ecebeb',
                Border: '2px solid #dbdbdb',
                FieldsBorder: '3px solid #dbdbdb',
                modalBgColor: '#ffffff',
                inputBgColor: '#ecebeb',
                connectBtnColor: '#ecebeb',
            })
        } else if (theme.active == true) {
            setTheme({
                active: false,
                backgroundColor: 'linear-gradient(#121212, #1f1f1f)',
                headerColor: 'rgb(32,32,32)',
                containerColor: '#232323',
                TextColor: 'white',
                FieldColor: '#1a1a1a',
                Border: '2px solid black',
                FieldsBorder: '3px solid #333',
                modalBgColor: 'rgb(35,35,35)',
                inputBgColor: '#323232',
                connectBtnColor: 'rgb(50,50,50)',
            })
        }
    }

    return(
        <SwapButton onClick={toggleTheme}>
            <BlackThemeIcon ArrrowColor={theme.active == true ? Moon : Sun}></BlackThemeIcon>
        </SwapButton>
    )
}

