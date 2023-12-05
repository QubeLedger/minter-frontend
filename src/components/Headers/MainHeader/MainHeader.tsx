import styled from 'styled-components'
import { ConnectButton } from '../../Buttons/ConnectButton/ConnectButton'
import Qubelogo from '../../../assets/svg/QubeLogo.svg'
import { ChengeTheme } from '../../Buttons/ChangeTheme/ChangeTheme'
import { useToggleTheme } from '../../../hooks/useToggleTheme'

const Header = styled.div <{headerColor: string}> `
    height: 80px;
    width: 100%;
    background-color: ${props => props.headerColor};
    display:flex;
    align-items:center;
`

const HeaderImage = styled.img`
    width: 50px;
    height: 50px;
    display:flex;
    margin-left: 65px;
    margin-right: auto;
    @media (max-width: 500px){
        margin-left: 26px;
    }
`



export const MainHeader = () => {

    const [theme, setTheme] = useToggleTheme()
    
    return(
    <Header headerColor={theme.headerColor}>
        <HeaderImage src={Qubelogo}></HeaderImage>
        <ConnectButton></ConnectButton>
        <ChengeTheme></ChengeTheme>
    </Header>
    )
}