import styled from 'styled-components'
import { InfoButton } from '../Buttons/InfoButton/InfoButton'




const InfoText = styled.div `
    margin-top: 25px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    flex-direction: column;
`



const InfoHiddenBlock = styled.div`
    max-height: 0;
    overflow: hidden;
`


export const InfoBlock = () => {
    return(
        <InfoText>
            <InfoButton></InfoButton>
            
            <InfoHiddenBlock>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo.</InfoHiddenBlock>
        </InfoText>
    )
}