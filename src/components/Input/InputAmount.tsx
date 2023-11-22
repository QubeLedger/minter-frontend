import styled from 'styled-components'
import { FormEvent, useState, useEffect } from "react";
import { useTokenFrom } from '../../hooks/useTokenFrom';
import { useTokenTo } from '../../hooks/useTokenTo';
import { useDebounce } from 'use-debounce';
import { TOKEN_INFO_QASSET, TOKEN_INFO_COLLATERAL, TokenType } from '../../constants/tokens'
import { QUBE_TESTNET_INFO } from '../../constants'
import { PairInfo, QUBE_TESTNET_PAIRS } from '../../constants/pair';
import { useAmountInStore } from '../../hooks/useAmountInStore';


const FromInputAmount = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    text-align: right;
    color: rgb(220,220,220);
    font-size: 24px;
    margin-right: 8px;
    outline-width: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

async function getAmountOutByAmountIn(PairId: string, restUrl: string, inp: number, action: string): Promise<string> {
    if (inp == 0) {
        return "0"
    }
    let res = await fetch(restUrl + `/core/stable/v1beta1/getAmountOutByAmountIn/${PairId}/${inp * 10**6}/${action}`)
    let amountOut = await res.json()
    return (Number(amountOut.amountOut) / 10**6).toFixed(2)
}

export const InputAmount = () => {
    const [ _, setAmtIn ] = useAmountInStore(); 
    
    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmtIn({amt: "0"});
        } else {
            setAmtIn({amt: e.currentTarget.value});
        }
        setTimeout(function () {}, 500);
    };

    return(
        <FromInputAmount placeholder="0" onChange={HandleInputAmpunt} ></FromInputAmount>
    )
}