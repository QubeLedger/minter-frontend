import styled from 'styled-components'
import { InfoButton } from '../Buttons/InfoButton/InfoButton'
import { useAccordionStore } from '../../hooks/useAccordionStore'
import { useToggleTheme } from '../../hooks/useToggleTheme'


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
    margin-top: 10px;
`

const InfoBlockNum = styled.div <{TextColor: string}>`
    text-align: right;
    margin-left: auto;
    font-size: 15px;
    color: ${props => props.TextColor};
`

const InfoBlockName = styled.div <{TextColor: string}>`
    margin-right: auto;
    text-align: left;
    font-size: 15px;
    color: ${props => props.TextColor}; 
`



export const InfoBlock = () => {

    const [accordion, setAccordion] = useAccordionStore ()
    const [theme, setTheme] = useToggleTheme()

    return(
        <InfoText>
            <InfoButton></InfoButton>
            <InfoHiddenBlock height={accordion.height} >
                <InfoBlockName TextColor={theme.TextColor}>
                    <p>Slippage</p>
                    <p>Protocol fee</p>
                    <p>Backing ratio</p>
                </InfoBlockName>
                <InfoBlockNum TextColor={theme.TextColor}>
                    <p>12%</p>
                    <p>0%</p>
                    <p>0%</p>
                </InfoBlockNum>
            </InfoHiddenBlock>
        </InfoText>
    )
}