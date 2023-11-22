import styled from 'styled-components'
import { BalanceButtonTo } from '../Buttons/BalanceButton/BalanceButtonTo'

const BalanceText = styled.div`
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    margin-top: -50px;
    margin-left: -300px;
    padding-right: 15px;
`


export const BalanceTo = () => {
    return(
        <BalanceText>
            <BalanceButtonTo></BalanceButtonTo>
        </BalanceText>
    )
}