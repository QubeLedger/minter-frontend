import styled from 'styled-components'
import { useWallet } from '../../../hooks/useWallet';
import { useAmountInStore } from '../../../hooks/useAmountInStore';
import { useTokenFrom } from '../../../hooks/useTokenFrom';
import { useBalanceStore } from '../../../hooks/useBalanceStore';

const ConvertSwapButton = styled.div `
    width:85%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    background: linear-gradient(to right, #7cc2fe, #2c96ff);
    margin-top: 25px;
    border-radius: 5px;
    color: black;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
`

const ConvertSwapButtonNonActive = styled.div `
    width:85%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    background: #757575;
    margin-top: 25px;
    border-radius: 5px;
    color: black;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
`

const ButtonSwapText = styled.a`
   font-weight: 500;
   font-size: 19px;
`

export const SwapButton = () => {
    const [wallet, _ ] = useWallet();
    const [amtIn, s ] = useAmountInStore();
    const [tokenFrom, s1 ] = useTokenFrom();
    const [balance, s2] = useBalanceStore();

    let button;
    if (wallet.init == false) {
        button = <ConvertSwapButtonNonActive><ButtonSwapText>Connect wallet</ButtonSwapText> </ConvertSwapButtonNonActive>
    } else {
        if (amtIn.amt == "") {
            button = <ConvertSwapButtonNonActive><ButtonSwapText>Enter {tokenFrom.base} amount</ButtonSwapText> </ConvertSwapButtonNonActive>
        } else if (Number(amtIn.amt) > Number(balance.amt)) {
            button = <ConvertSwapButtonNonActive><ButtonSwapText>Insufficient {tokenFrom.base} balance</ButtonSwapText> </ConvertSwapButtonNonActive>
        } else {
            button = <ConvertSwapButton><ButtonSwapText>Swap</ButtonSwapText> </ConvertSwapButton>
        }
    }

    return(
        <>{button}</>
    )
}