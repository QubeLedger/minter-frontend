import styled from 'styled-components'
import { InfoButton } from '../Buttons/InfoButton/InfoButton'
import { useAccordionStore } from '../../hooks/useAccordionStore'
import { useToggleTheme } from '../../hooks/useToggleTheme'
import { QUBE_TESTNET_INFO, TOKEN_INFO_COLLATERAL, TOKEN_INFO_QASSET } from '../../constants'
import { useTokenFrom } from '../../hooks/useTokenFrom'
import { useTokenTo } from '../../hooks/useTokenTo'
import { PairInfo, QUBE_TESTNET_PAIRS } from '../../constants/pair'
import { TokenType } from '../../constants/tokens'
import { useInfoStore } from '../../hooks/useInfoStore'
import { useEffect } from 'react'


const InfoText = styled.div `
    margin-top: 25px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    flex-direction: column;
`

const InfoHiddenBlock = styled.div <{height: string}>`
    max-height: ${props => props.height};
    overflow: hidden;
    width: 330px;
    display: flex;
    transition: max-height .5s ease-in-out;
    margin-top: 10px;
`

const InfoBlockNum = styled.div <{TextColor: string}>`
    text-align: right;
    margin-left: auto;
    font-size: 15px;
    color: ${props => props.TextColor};
`

const InfoBlockName = styled.div <{TextColor: string}>`
    margin-right: auto;
    text-align: left;
    font-size: 15px;
    color: ${props => props.TextColor}; 
`

async function getPairData(PairId: string, restUrl: string): Promise<[string, string, string]>  {
    try {
        let res = await fetch(restUrl + `/core/stable/v1beta1/pair/${PairId}`)
        let res_json = await res.json()
        return [
            res_json.backing_ratio,
            ((Number(res_json.minting_fee) / 10).toFixed(1)) == "1.0" ? "1" : ((Number(res_json.minting_fee) / 10).toFixed(1)),
            (Number(res_json.burning_fee) / 10).toFixed(1) == "1.0" ? "1" : ((Number(res_json.burning_fee) / 10).toFixed(1)),
        ]
    } catch {
        return ["", "", ""]
    }
}


export const InfoBlock = () => {

    const [ accordion, setAccordion ] = useAccordionStore ()
    const [ theme, setTheme ] = useToggleTheme()
    const [ tokenTo, setTokenTo ] = useTokenTo();
    const [ tokenFrom, setTokenFrom ] = useTokenFrom();
    const [ info, setInfo ] = useInfoStore();

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
            getPairData(String(pair?.PairId), QUBE_TESTNET_INFO.rest)
            .then(result => {
                if(!Number.isNaN((result[0])) || !Number.isNaN(result[1]) || !Number.isNaN(result[2])) { 
                    setInfo({br: result[0], m_fee: result[1] == "999.9" ? "blocked" : result[1], b_fee: result[2] == "999.9" ? "blocked" : result[2]}) 
                }
            }), 
        500);
        return () => clearTimeout(timeoutId);
    }, [pair])

    return(
        <InfoText>
            <InfoButton></InfoButton>
            <InfoHiddenBlock height={accordion.height} >
                <InfoBlockName TextColor={theme.TextColor}>
                    <p>Slippage</p>
                    <p>Protocol fee</p>
                    <p>Backing ratio</p>
                </InfoBlockName>
                <InfoBlockNum TextColor={theme.TextColor}>
                    <p>0%</p>
                    <p>{action == "mint" ? info.m_fee : info.b_fee}%</p>
                    <p>{info.br}%</p>
                </InfoBlockNum>
            </InfoHiddenBlock>
        </InfoText>
    )
}