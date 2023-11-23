import styled from 'styled-components'
import ConvertSwap from '../../../assets/svg/ConvertSwap.svg'
import { useTokenFrom } from '../../../hooks/useTokenFrom'
import { useTokenTo } from '../../../hooks/useTokenTo'
import { useAmountInStore } from '../../../hooks/useAmountInStore'
import { useAmountOutStore } from '../../../hooks/useAmountOutStore'


const TokenChangeDiv = styled.div `
    width:85%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const SwapImage = styled.img`
    width: 50px;
    height: 50px;
`

export const TokenChange = () => {
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [tokenTo, setTokenTo] = useTokenTo();
    const [amountIn, setAmountIn] = useAmountInStore();
    const [amountOut, setAmountOut] = useAmountOutStore();

    let Handler = async () => {
        let oldTokenFrom = tokenFrom
        setTokenFrom({
            logo: tokenTo.logo,
            base: tokenTo.base,
            type: tokenTo.type
        })
        setTokenTo({
            logo: oldTokenFrom.logo,
            base: oldTokenFrom.base,
            type: oldTokenFrom.type
        })

        let oldAmountIn = amountIn
        setAmountIn(amountOut);
        setAmountOut(oldAmountIn);
    }

    return(
        <TokenChangeDiv onClick={Handler}>
            <SwapImage src={ConvertSwap}></SwapImage>
        </TokenChangeDiv>
    )
}

