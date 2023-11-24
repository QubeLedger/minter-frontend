import styled from 'styled-components'
import { useState } from "react";
import ArrowSvg from '../../../assets/svg/InfoArrrowDown.svg'
import { useTokenTo } from '../../../hooks/useTokenTo'
import { useTokenFrom } from '../../../hooks/useTokenFrom'
import { QUBE_TESTNET_INFO } from '../../../constants'


const ButtonInfoMain = styled.button`
    width: 100%;
    cursor: pointer;
    font-family: 'Metropolis', sans-serif;
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 17px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const InfoImg = styled.img `
    margin-top:-5px;
    margin-left: 5px;
    cursor: pointer;
`

async function getPriceByDenom(denom: string, restUrl: string): Promise<number> {
    var price = await fetch(restUrl + `/core/oracle/v1beta1/denoms/${denom}/exchange_rate`)
    var pricejson = await price.json()
    return Number(pricejson.exchange_rate)
}

async function getPrice(tokenFrom: any, oldPrice: string, tokenTo: any,) {
    if (tokenFrom.type == "collateral") {
        let data = await getPriceByDenom(tokenFrom.base, QUBE_TESTNET_INFO.rest)
        return data.toFixed(3)
    } else if ( tokenFrom.type == "qasset" ) {
        let data = await getPriceByDenom(tokenTo.base, QUBE_TESTNET_INFO.rest)
        return (1 / data).toFixed(3)
    }
    return "0"
}

export const InfoButton = () => {
    const [tokenFrom, _] = useTokenFrom();
    const [tokenTo, set] = useTokenTo();
    const [price, setPrice] = useState('');

    let ButtonInfoMainV = <ButtonInfoMain></ButtonInfoMain>;

    if(tokenTo.base != "Select token" && tokenTo.logo != "") {
        try {
            getPrice(tokenFrom, price, tokenTo).then(price => setPrice(price))
        } catch {}
        ButtonInfoMainV = <ButtonInfoMain>
            1 {tokenFrom.base} = {price} {tokenTo.base}
            <InfoImg src={ArrowSvg}></InfoImg>
        </ButtonInfoMain>
    }
    
    return(
        <ButtonInfoMain>
            {((tokenTo.base != "Select token" && tokenTo.logo != "") && (tokenFrom.base != "Select token" && tokenFrom.logo != ""))? <ButtonInfoMain>
                1 {tokenFrom.base} = {price} {tokenTo.base}
                <InfoImg src={ArrowSvg}></InfoImg>
            </ButtonInfoMain> : <></>}
        </ButtonInfoMain>
    )
}