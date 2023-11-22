import styled from 'styled-components'
import { BalanceButtonFrom } from '../Buttons/BalanceButton/BalanceButtonFrom'

const BalanceText = styled.div`
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    position: absolute;
    margin-top: -50px;
    margin-left: 178px;
    @media (max-width: 500px){
        margin-left: 250px;
    }
    @media (max-width: 460px){
        margin-left: 235px;
    }
    @media (max-width: 425px){
        margin-left: 210px;
    }
    @media (max-width: 395px){
        margin-left: 180px;
    }
    @media (max-width: 375px){
        margin-left: 165px;
    }
    @media (max-width: 340px){
        margin-left: 130px;
    }
`


export const BalanceFrom = () => {
    return(
        <BalanceText>
            <BalanceButtonFrom></BalanceButtonFrom>
        </BalanceText>
    )
}