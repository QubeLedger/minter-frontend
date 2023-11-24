import styled from 'styled-components' 
import qube from '../../assets/QubeLogo.jpg'
import atom from '../../assets/svg/AtomLogo.svg'
import { QUBE_TESTNET_INFO, TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET } from '../../constants';
import { useTokenFrom } from '../../hooks/useTokenFrom';
import { useTokenTo } from '../../hooks/useTokenTo';
import { TokenType } from '../../constants/tokens';
import { useShowModalFrom, useShowModalTo } from '../../hooks/useShowModal';
import { useWallet } from '../../hooks/useWallet';
import { useState } from 'react';
import { Token } from '../../hooks/useTokenFrom';
import { Coin, useBalancesStore } from '../../hooks/useBalanceStore';

const Arrtokens = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-top: 2px solid black;
`

const TokenFields = styled.button`
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    cursor: pointer;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 26px;
`

const TokensText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TokensTextH3 = styled.h3`
    margin-top: 15px;
    color: white;
`

const TokensTextH2Number = styled.h2` 
    color: white;
    margin-left: auto;
    margin-right: 26px;
`

const TokensTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
`


async function getBalanceByWallet(wallet: any, tokenInp: any): Promise<string> {
    try {
        if (wallet.init == true) {
            let tokens = tokenInp.Type == TokenType.collateral ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET;
            let tokenInfo = tokens.find((token) => token.Base == tokenInp.Base)
            let res = await fetch(QUBE_TESTNET_INFO.rest + `/cosmos/bank/v1beta1/balances/${wallet.wallet.bech32Address}`)
            let balanceJson = await res.json()
            let balanceArray = balanceJson.balances
            let balance = balanceArray.find((bal: any) => bal.denom == String(tokenInfo?.Denom))
            return (Number(balance.amount) / (10 ** Number(tokenInfo?.Decimals))).toFixed(3)
        }
    } catch (e) {
        console.log(e)
    }
    return "0"
}

const getBalance = (balances: Array<Coin>, denom: string) => {
    let res: string = "0";
    balances.map((coin) => {
        if(coin.denom == denom) {
            res = coin.amt;
        }
    })

    return (Number(res) / 10 ** 6).toFixed(3) == "0.000" ? "0" : (Number(res) / 10 ** 6).toFixed(3)
}

export const TokensCollateral = () => {
    const [ tokenTo, setTokenTo] = useTokenTo();
    const [ tokenFrom, setTokenFrom] = useTokenFrom();
    const [ showModalFrom, setShowModalFrom ] = useShowModalFrom();
    const [ showModalTo, setShowModalTo ] = useShowModalTo();
    const [balances, setBalances] = useBalancesStore();

    const tokens = TOKEN_INFO_COLLATERAL.map((token) => 
            <TokenFields onClick={() => {
                if(showModalFrom.b == true) {
                    setTokenFrom({
                        logo: token.Logo,
                        base: token.Base,
                        type: token.Type == TokenType.collateral ? "collateral" : "qasset"
                    })
                } else if (showModalTo.b == true) {
                    setTokenTo({
                        logo: token.Logo,
                        base: token.Base,
                        type: token.Type == TokenType.collateral ? "collateral" : "qasset"
                    })
                }
                setShowModalFrom({b: false})
                setShowModalTo({b: false})
            }}>
            <Img src={token.Logo}></Img>
            <TokensText>
                <TokensTextH3>{token.Base}</TokensTextH3>
                <TokensTextH5>{token.Network}</TokensTextH5>
            </TokensText>
            <TokensTextH2Number>{getBalance(balances, token.Denom)}</TokensTextH2Number>
        </TokenFields>       
    )
    return(
        <Arrtokens>
            {tokens}
        </Arrtokens>
    )
}

export const TokensQAsset = () => {
    const [ tokenTo, setTokenTo] = useTokenTo();
    const [ tokenFrom, setTokenFrom] = useTokenFrom();
    const [ showModalFrom, setShowModalFrom ] = useShowModalFrom();
    const [ showModalTo, setShowModalTo ] = useShowModalTo();
    const [balances, setBalances] = useBalancesStore();
    
    const tokens = TOKEN_INFO_QASSET.map((token) => 
        <TokenFields onClick={() => {
            if(showModalFrom.b == true) {
                setTokenFrom({
                    logo: token.Logo,
                    base: token.Base,
                    type: token.Type == TokenType.collateral ? "collateral" : "qasset"
                })
            } else if (showModalTo.b == true) {
                setTokenTo({
                    logo: token.Logo,
                    base: token.Base,
                    type: token.Type == TokenType.collateral ? "collateral" : "qasset"
                })
            }
            setShowModalFrom({b: false})
            setShowModalTo({b: false})
        }}>
            <Img src={token.Logo}></Img>
            <TokensText>
                <TokensTextH3>{token.Base}</TokensTextH3>
                <TokensTextH5>{token.Network}</TokensTextH5>
            </TokensText>
            <TokensTextH2Number>{getBalance(balances, token.Denom)}</TokensTextH2Number>
        </TokenFields>       
    )
    return(
        <Arrtokens>
            {tokens}
        </Arrtokens>
    )
}