import styled from 'styled-components'
import { BalanceButtonFrom } from '../Buttons/BalanceButton/BalanceButtonFrom'

const BalanceText = styled.div`
    width: 100%;
    text-align: right;
    font-weight: 600;
    font-size: 17px;

    margin-top: -50px;
    margin-left: -100%;
    padding-right: 11px;
`


export const BalanceFrom = () => {
    return(
        <BalanceText>
            <BalanceButtonFrom></BalanceButtonFrom>
        </BalanceText>
    )
}