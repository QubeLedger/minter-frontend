import styled from 'styled-components'
import { TokenModalFrom } from '../../../Modal/TokenModal/TokenModalFrom'


const PopupChangeFromToken = styled.button`
    width:100%;
    height:30px;
    border: none;
    border-radius: 5px;
    outline: none;
    margin-left: 15px;
    background-color: transparent;
    padding: 0;
`

export const PopupFromButton = () => {
    return(
        <PopupChangeFromToken>
            <TokenModalFrom></TokenModalFrom>
        </PopupChangeFromToken>
    )
}