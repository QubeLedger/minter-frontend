import styled from 'styled-components'
import { FormEvent } from "react";
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