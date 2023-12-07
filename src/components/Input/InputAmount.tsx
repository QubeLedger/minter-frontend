import styled from 'styled-components'
import { FormEvent, useRef, useState } from "react";
import { useAmountInStore } from '../../hooks/useAmountInStore';
import { useToggleTheme } from '../../hooks/useToggleTheme';


const FromInputAmount = styled.input <{TextColor: string}>`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    text-align: right;
    color: ${props => props.TextColor};
    font-size: 24px;
    margin-right: 8px;
    outline-width: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const InputAmount = () => {
    const [ amtIn, setAmtIn ] = useAmountInStore(); 
    const [theme, setTheme] = useToggleTheme()
    
    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmtIn({amt: ""});
        } else {
            setAmtIn({amt: e.currentTarget.value});
        }
    };

    return(
        <FromInputAmount TextColor={theme.TextColor} placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></FromInputAmount>
    )
}