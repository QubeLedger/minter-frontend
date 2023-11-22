import styled from 'styled-components'

const ButtonBalance = styled.button`
   width: 100%;
   height: 100%;
   cursor: pointer;
   font-family: 'Metropolis', sans-serif;
   border: none;
   background: transparent;
   font-weight: 600;
   font-size: 12px;
   color: #444;
   outline: none;
`

const BalanceText = styled.a`
    font-size: 12px;
    text-align: right;
`

export const BalanceButtonTo = () => {
    return(
        <ButtonBalance>
            <BalanceText>Available: 1015.59 USQ</BalanceText>
        </ButtonBalance>
    )
}