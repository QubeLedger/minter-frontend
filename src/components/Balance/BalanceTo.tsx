import styled from 'styled-components'
import { BalanceButtonTo } from '../Buttons/BalanceButton/BalanceButtonTo'

const BalanceText = styled.div`
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    position: absolute;
    margin-top: -50px;
    margin-left: 183px;
    @media (max-width: 500px){
        margin-left: 240px;
    }
    @media (max-width: 440px){
        margin-left: 225px;
    }
    @media (max-width: 425px){
        margin-left: 220px;
    }
    @media (max-width: 395px){
        margin-left: 188px;
    }
    @media (max-width: 375px){
        margin-left: 175px;
    }
    @media (max-width: 340px){
        margin-left: 138px;
    }
`


export const BalanceTo = () => {
    return(
        <BalanceText>
            <BalanceButtonTo></BalanceButtonTo>
        </BalanceText>
    )
}