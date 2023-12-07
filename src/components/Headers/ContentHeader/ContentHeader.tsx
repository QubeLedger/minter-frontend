import styled from 'styled-components'
import { useToggleTheme } from '../../../hooks/useToggleTheme'

const ContainerHeader = styled.div `
    width:85%;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
    @media (max-width: 500px){
       margin-top:55px;
    }
`

const ContainerHeaderText = styled.h2 <{TextColor: string}> `
    font-size: 25px;
    font-family: 'Metropolis', sans-serif;
    color: ${props => props.TextColor};
`

export const ContentHeader = () => {

    const [theme, setTheme] = useToggleTheme()
    
    return(
        <ContainerHeader>
            <ContainerHeaderText TextColor={theme.TextColor}>Convert qAssets</ContainerHeaderText>
        </ContainerHeader>
    )
}