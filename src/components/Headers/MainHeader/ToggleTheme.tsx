import styled from 'styled-components'
import Sun from '../../../assets/svg/sun.svg'

const BlackThemeIcon = styled.img `
    height: 28px;
    width: 28px;
    margin-right: 65px;
    cursor: pointer;
    @media (max-width: 500px){
        margin-right: 26px;
    }
`

const WhiteThemeIcon = styled.div `
    height: 40px;
    width: 40px;
`

export const ToggleTheme = () => {
    return(
        <BlackThemeIcon src={Sun}></BlackThemeIcon>
    )
}