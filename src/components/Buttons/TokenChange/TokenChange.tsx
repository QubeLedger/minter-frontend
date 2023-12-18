import styled from 'styled-components'
import ConvertSwap from '../../../assets/svg/ConvertSwap.svg'
import ConvertSwapBlack from '../../../assets/svg/ConvertSwapBlack.svg'
import { useTokenFrom } from '../../../hooks/useTokenFrom'
import { useTokenTo } from '../../../hooks/useTokenTo'
import { useAmountInStore } from '../../../hooks/useAmountInStore'
import { useAmountOutStore } from '../../../hooks/useAmountOutStore'
import { useToggleTheme } from '../../../hooks/useToggleTheme'


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

const SwapImage = styled.svg <{ArrrowColor: string}>`
    background: url(${props => props.ArrrowColor});
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
`

export const TokenChange = () => {
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [tokenTo, setTokenTo] = useTokenTo();
    const [amountIn, setAmountIn] = useAmountInStore();
    const [amountOut, setAmountOut] = useAmountOutStore();
    const [theme, setTheme] = useToggleTheme()

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
            <SwapImage ArrrowColor={theme.active == true ? ConvertSwapBlack : ConvertSwap}></SwapImage>
        </TokenChangeDiv>
    )
}

