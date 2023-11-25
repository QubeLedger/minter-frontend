import styled from 'styled-components'
import { useEffect, useState } from "react";
import { useWallet } from '../../../hooks/useWallet'
import { useTokenTo } from '../../../hooks/useTokenTo'
import { TOKEN_INFO_QASSET, TOKEN_INFO_COLLATERAL } from '../../../constants'
import { UpdateBalances } from '../../../connection/balances';
import { Coin, useBalancesStore } from '../../../hooks/useBalanceStore';
import { useAmountOutStore } from '../../../hooks/useAmountOutStore';

const ButtonBalance = styled.div`
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

const getBalance = (balances: Array<Coin>, denom: string) => {
    let res: string = "0";
    balances.map((coin) => {
        if(coin.denom == denom) {
            res = coin.amt;
        }
    })
    return (Number(res) / 10 ** 6).toFixed(3) == "0.000" ? "0" : (Number(res) / 10 ** 6).toFixed(3)
}


export const BalanceButtonTo = () => {
    const [ wallet, s ] = useWallet(); 
    const [tokenTo, _] = useTokenTo();
    const [balance, setBalance] = useState('0');
    const [balances, setBalances] = useBalancesStore();

    let BalanceButtonV;

    async function update() {
        if (wallet.init == true) {
            let blns = await UpdateBalances(wallet, balances);
            
            let tokens = tokenTo.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET;
            let tokenInfo = tokens.find((token) => token.Base == tokenTo.base)
            setBalance(getBalance(blns, String(tokenInfo?.Denom)))
        }
    }

    if((tokenTo.base != "Select token") && tokenTo.logo != "") {
        update()
        BalanceButtonV = <ButtonBalance>
            <BalanceText>Available: {balance} {tokenTo.base}</BalanceText>
        </ButtonBalance>
    } else {
        BalanceButtonV = <ButtonBalance></ButtonBalance>
    }

    return(
        <>{BalanceButtonV}</>
    )
}