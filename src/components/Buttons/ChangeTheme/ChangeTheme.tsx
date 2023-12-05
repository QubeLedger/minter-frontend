import styled from 'styled-components'
import Sun from '../../../assets/svg/sun.svg'
import { useToggleTheme } from '../../../hooks/useToggleTheme'



const SwapButton= styled.button`
    width: 35px;
    margin-right: 65px;
    background-color: black;
    padding: 0;
    border-radius: 50px;
`

const BlackThemeIcon = styled.img `
    height: 28px;
    width: 28px;
    cursor: pointer;
    @media (max-width: 500px){
        margin-right: 26px;
    }
`


export const ChengeTheme = () => {

    const [theme, setTheme] = useToggleTheme()

    function toggleTheme () {
        if(theme.active == false) {
            setTheme({
                active: true,
                backgroundColor: 'linear-gradient(174deg, rgba(255,255,255,1) 0%, rgba(235,251,255,1) 50%, rgba(233,252,255,1) 100%);',
                headerColor: 'rgb(209, 248, 255,.2)',
                containerColor: 'white',
                containerTextColor: '#333',
                containerFieldColor: 'rgba(245, 245, 245)'
            })
        } else if (theme.active == true) {
            setTheme({
                active: false,
                backgroundColor: 'linear-gradient(#121212, #1f1f1f)',
                headerColor: 'rgb(32,32,32)',
                containerColor: '#232323',
                containerTextColor: 'white',
                containerFieldColor: '#1a1a1a'
            })
        }
    }

    return(
        <SwapButton onClick={toggleTheme}>
            <BlackThemeIcon src={Sun}></BlackThemeIcon>
        </SwapButton>
    )
}

