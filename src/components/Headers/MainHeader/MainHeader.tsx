import styled from 'styled-components'
import { ConnectButton } from '../../Buttons/ConnectButton/ConnectButton'
import Qubelogo from '../../../assets/QubeLogo.png'
import { ToggleTheme } from './ToggleTheme'

const Header = styled.div `
    height: 80px;
    width: 100%;
    background-color: rgb(32,32,32);
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
    return(
    <Header>
        <HeaderImage src={Qubelogo}></HeaderImage>
        <ConnectButton></ConnectButton>
        <ToggleTheme></ToggleTheme>
    </Header>
    )
}