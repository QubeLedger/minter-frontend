import styled from 'styled-components'
import Swap from '../../../assets/ConvertSwap.png'


const ConvertSwap = styled.div `
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

export  const TokenChange = () => {
    return(
        <ConvertSwap>
            <SwapImage src={Swap}></SwapImage>
        </ConvertSwap>
    )
}

