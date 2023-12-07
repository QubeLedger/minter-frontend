import styled from 'styled-components'
import { InputAmount } from '../../Input/InputAmount'
import { PopupSelectFromToken } from '../../Popup/PopupFrom/PopupSelectFromToken'
import { BalanceFrom } from '../../Balance/BalanceFrom'
import { useToggleTheme } from '../../../hooks/useToggleTheme'


const ConvertFrom = styled.div <{FieldColor: string, FieldsBorder: string}> `
    width:85%;
    height:80px;
    background-color: ${props => props.FieldColor};
    border: ${props => props.FieldsBorder};
    border-radius: 10px;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const FromFieldText = styled.a <{TextColor: string}>`
   font-weight: 500;
   font-size: 20px;
   color: ${props => props.TextColor};
   padding-left: 30px;
   position: absolute;
   margin-top: -125px;
   margin-left: -30px;
   font-family: 'Metropolis', sans-serif;
   font-size: 16px;
`

const Down = styled.div`
    display: flex;
    width: 100%;
`

export const FromField = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
            <ConvertFrom FieldColor={theme.FieldColor} FieldsBorder={theme.FieldsBorder}>
                <FromFieldText TextColor={theme.TextColor}>From</FromFieldText>
                <Down>
                    <PopupSelectFromToken></PopupSelectFromToken>
                    <InputAmount></InputAmount>
                </Down>
                <BalanceFrom></BalanceFrom>
            </ConvertFrom>
    )
}

