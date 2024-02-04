import styled from 'styled-components'
import { ConnectModal } from '../../Modal/ConnectModal/ConnectModal'
import { useWallet } from '../../../hooks/useWallet'
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore'

const ButtonConnect = styled.div <{color: string, margin: string}>`
    max-width: 100%;
    height: 35px;
    background: ${props => props.color};
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius:15px;
    margin-top: ${props => props.margin};
    margin-left: auto;
    margin-right: 15px;
    cursor: pointer;
`


export const ConnectButton = () => {

    const [ connectWallet, setConnectKeplrWalletStore ] = useConnectKeplrWalletStore();

    let BackgroundConnectButton = 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))';

    return(
        <ButtonConnect
        color={connectWallet.connected == true ? 'transparent' : BackgroundConnectButton} 
        margin={connectWallet.connected == true ? '-4px' : '0px' }>
            <ConnectModal></ConnectModal>
        </ButtonConnect>
    )
}

