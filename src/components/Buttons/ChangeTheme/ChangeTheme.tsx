import styled from 'styled-components'
import Sun from '../../../assets/svg/sun.svg'
import Moon from '../../../assets/svg/Moon.svg'
import { ThemeDefaultState, ThemeWhiteState, useToggleTheme } from '../../../hooks/useToggleTheme'
import { useEffect } from 'react'



const SwapButton= styled.button`
    width: 35px;
    margin-right: 65px;
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 50px;
    outline: none;
    @media (max-width: 500px){
        margin-right: 26px;
    }
`

const BlackThemeIcon = styled.svg  <{ArrrowColor: string}>`
    background: url(${props => props.ArrrowColor});
    height: 28px;
    width: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    @media (max-width: 500px){
        margin-right: 0px;
    }
`


export const ChengeTheme = () => {

    const [theme, setTheme] = useToggleTheme();


    function toggleTheme () {
        if(theme.active == false) {
            localStorage.setItem('minterTheme', 'white')
            setTheme(ThemeWhiteState)
        } else if (theme.active == true) {
            localStorage.setItem('minterTheme', 'black')
            setTheme(ThemeDefaultState)
        }
        
    }

    return(
        <SwapButton onClick={toggleTheme}>
            <BlackThemeIcon  ArrrowColor={theme.active == true ? Moon : Sun}></BlackThemeIcon>
        </SwapButton>
    )
}

