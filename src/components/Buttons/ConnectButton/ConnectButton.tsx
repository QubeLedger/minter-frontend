import styled from 'styled-components'
import { ConnectModal } from '../../Modal/ConnectModal/ConnectModal'
import { useWallet } from '../../../hooks/useWallet'

const ButtonConnect = styled.div`
    max-width: 100%;
    height: 35px;
    background: linear-gradient(to right, #77bff9, #2d96ff);
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius: 13px;
    border:none;
    margin-left: auto;
    margin-right: 15px;
    cursor: pointer;
`


export const ConnectButton = () => {

    return(
        <ButtonConnect>
            <ConnectModal></ConnectModal>
        </ButtonConnect>
    )
}

