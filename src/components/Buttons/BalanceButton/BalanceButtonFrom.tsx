import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useWallet } from '../../../hooks/useWallet';
import { useTokenFrom } from '../../../hooks/useTokenFrom';
import { TOKEN_INFO_QASSET, TOKEN_INFO_COLLATERAL } from '../../../constants';
import { Coin, useBalancesStore } from '../../../hooks/useBalanceStore';
import { UpdateBalances } from '../../../connection/balances';
import { useAmountInStore } from '../../../hooks/useAmountInStore';

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
   text-align: right;
`

const BalanceText = styled.a`
    font-size: 12px;
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

export const BalanceButtonFrom = () => {
    const [ wallet, s ] = useWallet(); 
    const [tokenFrom, _] = useTokenFrom();
    const [balances, setBalances] = useBalancesStore();
    const [balance, setBalance] = useState('0');
    const [ amtIn, setAmtIn ] = useAmountInStore();

    let BalanceButtonV;

    const setAvailableBalance = (balance: string) => {
        if((tokenFrom.base != "Select token") && tokenFrom.logo != "") {
            setAmtIn({amt: balance})
        }
    }

    async function update() {
        if (wallet.init == true) {
            let blns = await UpdateBalances(wallet, balances);
            
            let tokens = tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET;
            let tokenInfo = tokens.find((token) => token.Base == tokenFrom.base)
            setBalance(getBalance(blns, String(tokenInfo?.Denom)))
        }
    }

    if((tokenFrom.base != "Select token") && tokenFrom.logo != "") {
        update();
        BalanceButtonV = <ButtonBalance onClick={() => setAvailableBalance(balance)}>
            <BalanceText>Available: {balance} {tokenFrom.base}</BalanceText>
        </ButtonBalance>
    } else {
        BalanceButtonV = <ButtonBalance></ButtonBalance>
    }

    return(
        <>{BalanceButtonV}</>
    )
}