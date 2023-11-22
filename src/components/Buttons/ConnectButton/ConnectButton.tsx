import styled from 'styled-components'
import { ConnectExample } from '../../Modal/ConnectModal/ConnectModal'

const ButtonConnect = styled.div`
    width: 120px;
    height: 35px;
    background: linear-gradient(to right, #77bff9, #2d96ff);
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius:5px;
    text-align:center;
    border:none;
    margin-left: auto;
    margin-right: 15px;
    cursor: pointer;
`


export const ConnectButton = () => {
    return(
        <ButtonConnect>
            <ConnectExample></ConnectExample>
        </ButtonConnect>
    )
}

