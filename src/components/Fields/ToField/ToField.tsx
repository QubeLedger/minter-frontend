import styled from 'styled-components'
import { PopupSelectToToken } from '../../Popup/PopupTo/PopupSelectToToken'
import { BalanceTo } from '../../Balance/BalanceTo'
import { useTokenTo } from '../../../hooks/useTokenTo'
import { useTokenFrom } from '../../../hooks/useTokenFrom'
import { QUBE_TESTNET_INFO, TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET } from '../../../constants'
import { PairInfo, QUBE_TESTNET_PAIRS } from '../../../constants/pair'
import { TokenType } from '../../../constants/tokens'
import { useEffect, useState } from 'react'
import { useAmountInStore } from '../../../hooks/useAmountInStore'
import { useAmountOutStore } from '../../../hooks/useAmountOutStore'


const ConvertTo = styled.div `
    width:85%;
    height:80px;
    background-color: #1a1a1a;
    border: 3px solid #333333;
    border-radius: 10px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const ToFieldOutputAmount = styled.div`
    width: 100%;
    height:100%;
    background: transparent;
    color: rgb(220,220,220);
    text-align: right;
    font-size: 23px;
    margin-right: 15px;
    font-family: system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
`

const ToFieldText = styled.a`
   font-weight: 500;
   font-size: 20px;
   color: white;
   padding-left: 30px;
   position: absolute;
   margin-top: -125px;
   margin-left: -30px;
   font-family: 'Metropolis', sans-serif;
   font-size: 16px;
`
const Down = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

async function getAmountOutByAmountIn(PairId: string, restUrl: string, inp: number, action: string, old: string, dec: number): Promise<string> {
    try {
        if (inp == 0) {
            return "0"
        }
        let res = await fetch(restUrl + `/core/stable/v1beta1/getAmountOutByAmountIn/${PairId}/${(inp * 10**dec).toFixed(0)}/${action}`)
        let amountOut = await res.json()
        return (Number(amountOut.amountOut) / 10**6).toFixed(2)
    } catch {
        return old
    }
}

export const ToField = () => {
    const [ amtIn, setAmtIn ] = useAmountInStore();
    const [ amtOut, setAmtOut ] = useAmountOutStore();
    const [ amt, setAmt ] = useState('');
    const [ tokenTo, setTokenTo ] = useTokenTo();
    const [ tokenFrom, setTokenFrom ] = useTokenFrom();

    let tokenInfoTo = (tokenTo.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET).find((token: any) => token.Base == tokenTo.base);
    let tokenInfoFrom = (tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : TOKEN_INFO_QASSET).find((token: any) => token.Base == tokenFrom.base);

    let pair: PairInfo | undefined;
    let action: string = "";

    if (tokenInfoFrom?.Type == TokenType.collateral){
        pair = QUBE_TESTNET_PAIRS.find((p: any) => (p.DenomIn == tokenInfoFrom?.Denom) && (p.DenomOut == tokenInfoTo?.Denom) );
        action = "mint"
    } else if (tokenInfoFrom?.Type == TokenType.qAsset){
        pair = QUBE_TESTNET_PAIRS.find((p: any) => (p.DenomIn == tokenInfoTo?.Denom) && (p.DenomOut == tokenInfoFrom?.Denom));
        action = "burn"
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => 
            getAmountOutByAmountIn(String(pair?.PairId), QUBE_TESTNET_INFO.rest, Number(amtIn.amt), String(action), amt, Number(tokenInfoFrom?.Decimals))
            .then(amountOut => {
                Number.isNaN(Number(amountOut)) ? setAmtOut({amt: "0"}) :setAmtOut({amt: amountOut})
            }), 
        1500);
        return () => clearTimeout(timeoutId);
    }, [amtIn, action, tokenInfoFrom, pair]);

    return(
        <ConvertTo>
            <ToFieldText>To</ToFieldText>
            <Down>
                <PopupSelectToToken></PopupSelectToToken>
                <ToFieldOutputAmount placeholder='0'>{amtOut.amt}</ToFieldOutputAmount>
            </Down>
            <BalanceTo></BalanceTo>
        </ConvertTo>
    )
}