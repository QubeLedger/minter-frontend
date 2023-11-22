import styled from 'styled-components'
import { InputAmount } from '../../Input/InputAmount'
import { PopupSelectFromToken } from '../../Popup/PopupFrom/PopupSelectFromToken'
import { BalanceFrom } from '../../Balance/BalanceFrom'


const ConvertFrom = styled.div `
    width:85%;
    height:80px;
    background-color: #1a1a1a;
    border: 3px solid #333333;
    border-radius: 10px;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const FromFieldText = styled.a`
   font-weight: 500;
   font-size: 20px;
   color: white;
   padding-left: 30px;
   position: absolute;
   margin-top: -125px;
   margin-left: -30px;
   font-family: 'Metropolis', sans-serif;
   font-size: 16px;
`

export const FromField = () => {
    return(
            <ConvertFrom>
                <FromFieldText>From</FromFieldText>
                <BalanceFrom></BalanceFrom>
                <PopupSelectFromToken></PopupSelectFromToken>
                <InputAmount></InputAmount>
            </ConvertFrom>
    )
}

