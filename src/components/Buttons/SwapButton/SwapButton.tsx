import styled from 'styled-components'

const ConvertSwapButton = styled.div `
    width:85%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    background: linear-gradient(to right, #7cc2fe, #2c96ff);
    margin-top: 25px;
    border-radius: 5px;
    color: black;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
`

const ButtonSwapText = styled.a`
   font-weight: 500;
   font-size: 20px;
`

export const SwapButton = () => {
    return(
        <ConvertSwapButton>
          <ButtonSwapText>Swap</ButtonSwapText> 
        </ConvertSwapButton>
    )
}