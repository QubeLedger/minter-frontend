import styled from 'styled-components'
import { InfoBlock } from '../../Info/InfoBlock'
import arrow from '../../../assets/svg/InfoArrrowDown.svg'

const Open = () => {
    document.getElementById("open").addEventListener('click', () => {
        let content = el.next
    })
}

const ButtonInfoMain = styled.button`
    width: 100%;
    cursor: pointer;
    font-family: 'Metropolis', sans-serif;
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 17px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const InfoImg = styled.img `
    margin-top:-5px;
    margin-left: 5px;
    cursor: pointer;
`


export const InfoButton = () => {
    return(
        <ButtonInfoMain id="open" onClick={Open}>
             1 ATOM = 8.722 USQ
             <InfoImg src={arrow}></InfoImg>
        </ButtonInfoMain>
    )
}