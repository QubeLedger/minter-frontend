import styled from 'styled-components'
import { InfoButton } from '../Buttons/InfoButton/InfoButton'
import { useAccordionStore } from '../../hooks/useAccordionStore'


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



const InfoHiddenBlock = styled.div <{height: string}>`
    max-height: ${props => props.height};
    overflow: hidden;
    width: 330px;
    display: flex;
    transition: max-height .5s ease-in-out;
`

const InfoBlockNum = styled.div`
    text-align: right;
    margin-left: auto;
`

const InfoBlockName = styled.div`
    margin-right: auto;
    text-align: left;
`



export const InfoBlock = () => {

    const [accordion, setAccordion] = useAccordionStore ()

    return(
        <InfoText>
            <InfoButton></InfoButton>
            <InfoHiddenBlock height={accordion.height} >
                <InfoBlockName>
                    <p>Burning fee</p>
                    <p>Minting fee</p>
                    <p>Backing ratio</p>
                </InfoBlockName>
                <InfoBlockNum>
                    <p>0%</p>
                    <p>0%</p>
                    <p>0%</p>
                </InfoBlockNum>
            </InfoHiddenBlock>
        </InfoText>
    )
}