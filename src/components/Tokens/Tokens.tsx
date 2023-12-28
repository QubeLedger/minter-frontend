import styled from 'styled-components' 
import qube from '../../assets/QubeLogo.jpg'
import atom from '../../assets/svg/AtomLogo.svg'
import { QUBE_TESTNET_INFO, TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET } from '../../constants';
import { useTokenFrom } from '../../hooks/useTokenFrom';
import { useTokenTo } from '../../hooks/useTokenTo';
import { TokenType } from '../../constants/tokens';
import { useShowModalFrom, useShowModalTo } from '../../hooks/useShowModal';
import { useWallet } from '../../hooks/useWallet';
import { useEffect, useState } from 'react';
import { Token } from '../../hooks/useTokenFrom';
import { Coin, useBalancesStore } from '../../hooks/useBalanceStore';
import { UpdateBalances } from '../../connection/balances';
import { useToggleTheme } from '../../hooks/useToggleTheme';

const Arrtokens = styled.div <{containerTextColor: string, Border: string, ModalHoverColor: string}>`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    color: ${props => props.containerTextColor};
    :hover{
        background: ${props => props.ModalHoverColor};
        transition: background .2s ease-in-out;
        border-radius: 10px;
    }
`

const TokenDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const TokenFields = styled.button <{containerTextColor: string}>`
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: ${props => props.containerTextColor};
    cursor: pointer;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 26px;
`

const TokensText = styled.div `
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TokensTextH3 = styled.h3 `
    margin-top: 15px;
`

const TokensTextH2Number = styled.h2 ` 
    margin-left: auto;
    margin-right: 26px;
`

const TokensTextH5 = styled.h5`
   margin-top: -10px;
    color: grey;
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

export const TokensCollateral = () => {
    const [ tokenTo, setTokenTo] = useTokenTo();
    const [ tokenFrom, setTokenFrom] = useTokenFrom();
    const [ showModalFrom, setShowModalFrom ] = useShowModalFrom();
    const [ showModalTo, setShowModalTo ] = useShowModalTo();
    const [balances, setBalances] = useBalancesStore();
    const [wallet, setWallet] = useWallet();
    const [theme, setTheme] = useToggleTheme()

    useEffect(() => {
        async function update() {
            let blns = await UpdateBalances(wallet, balances);
            setBalances(blns)
        }
        update();
    }, [])

    const tokens = TOKEN_INFO_COLLATERAL.map((token) => 
            <TokenFields containerTextColor={theme.TextColor} onClick={() => {
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
            <TokensText >
                <TokensTextH3>{token.Base}</TokensTextH3>
                <TokensTextH5>{token.Network}</TokensTextH5>
            </TokensText>
            <TokensTextH2Number >{getBalance(balances, token.Denom)}</TokensTextH2Number>
        </TokenFields>       
    )
    return(
        <TokenDiv>
            <Arrtokens ModalHoverColor={theme.ModalHoverColor} containerTextColor={theme.TextColor} Border={theme.Border}>
                {tokens}
            </Arrtokens>
        </TokenDiv>
        
    )
}

export const TokensQAsset = () => {
    const [ tokenTo, setTokenTo] = useTokenTo();
    const [ tokenFrom, setTokenFrom] = useTokenFrom();
    const [ showModalFrom, setShowModalFrom ] = useShowModalFrom();
    const [ showModalTo, setShowModalTo ] = useShowModalTo();
    const [balances, setBalances] = useBalancesStore();
    const [theme, setTheme] = useToggleTheme()
    const [wallet, setWallet] = useWallet();

    useEffect(() => {
        async function update() {
            let blns = await UpdateBalances(wallet, balances);
            setBalances(blns)
        }
        update();
    }, [])
    
    const tokens = TOKEN_INFO_QASSET.map((token) => 
        <TokenFields containerTextColor={theme.TextColor} onClick={() => {
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
            <TokensText >
                <TokensTextH3 >{token.Base}</TokensTextH3>
                <TokensTextH5>{token.Network}</TokensTextH5>
            </TokensText>
            <TokensTextH2Number >{getBalance(balances, token.Denom)}</TokensTextH2Number>
        </TokenFields>       
    )
    return(
        <TokenDiv>
            <Arrtokens ModalHoverColor={theme.ModalHoverColor} containerTextColor={theme.TextColor} Border={theme.Border}>
                {tokens}
            </Arrtokens>
        </TokenDiv>
    )
}