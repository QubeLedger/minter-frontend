import styled from 'styled-components'
import { InputAmount } from '../../Input/InputAmount'
import { PopupSelectFromToken } from '../../Popup/PopupFrom/PopupSelectFromToken'
import { BalanceFrom } from '../../Balance/BalanceFrom'
import { useToggleTheme } from '../../../hooks/useToggleTheme'


const ConvertFrom = styled.div <{containerFieldColor: string, contrainerFieldsBorder: string}> `
    width:85%;
    height:80px;
    background-color: ${props => props.containerFieldColor};
    border: ${props => props.contrainerFieldsBorder};
    border-radius: 10px;
    margin-top: 35px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const FromFieldText = styled.a <{containerTextColor: string}>`
   font-weight: 500;
   font-size: 20px;
   color: ${props => props.containerTextColor};
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
            <ConvertFrom containerFieldColor={theme.containerFieldColor} contrainerFieldsBorder={theme.contrainerFieldsBorder}>
                <FromFieldText containerTextColor={theme.containerTextColor}>From</FromFieldText>
                <Down>
                    <PopupSelectFromToken></PopupSelectFromToken>
                    <InputAmount></InputAmount>
                </Down>
                <BalanceFrom></BalanceFrom>
            </ConvertFrom>
    )
}

