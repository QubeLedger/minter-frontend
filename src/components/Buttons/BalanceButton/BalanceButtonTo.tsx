import styled from 'styled-components'
import { useState } from "react";
import { useWallet } from '../../../hooks/useWallet'
import { useTokenTo } from '../../../hooks/useTokenTo'
import { TOKEN_INFO_QASSET, TOKEN_INFO_COLLATERAL } from '../../../constants'
import { QUBE_TESTNET_INFO } from '../../../constants'

const ButtonBalance = styled.button`
   width: 100%;
   height: 100%;
   cursor: pointer;
   font-family: 'Metropolis', sans-serif;
   border: none;
   background: transparent;
   font-weight: 600;
   font-size: 12px;
   color: #444;
   outline: none;
   padding: 0;
`

const BalanceText = styled.a`
    font-size: 12px;
    text-align: right;
`

async function getBalance(address: string, restUrl: string, denom: string, dec: number): Promise<string> {
    let res = await fetch(restUrl + `/cosmos/bank/v1beta1/balances/${address}`)
    let balanceJson = await res.json()
    let balanceArray = balanceJson.balances
    let balance = balanceArray.find((bal: any) => bal.denom == denom)
    return (Number(balance.amount) / (10 ** dec)).toFixed(3)
}

export const BalanceButtonTo = () => {
    const [ wallet, s ] = useWallet(); 
    const [tokenTo, _] = useTokenTo();
    const [balance, setBalance] = useState('0');

    if (wallet.init == true) {
        let tokens = tokenTo.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET;
        let tokenInfo = tokens.find((token) => token.Base == tokenTo.base)
        getBalance(wallet.wallet.bech32Address, QUBE_TESTNET_INFO.rest, String(tokenInfo?.Denom), Number(tokenInfo?.Decimals)).then(price => {setBalance(price)})
    }
    return(
        <ButtonBalance>
            <BalanceText>Available: {balance} {tokenTo.base}</BalanceText>
        </ButtonBalance>
    )
}