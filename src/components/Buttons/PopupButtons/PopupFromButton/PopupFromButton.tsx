import styled from 'styled-components'
import { TokenModalFrom } from '../../../Modal/TokenModal/TokenModalFrom'


const PopupChangeFromToken = styled.button`
    width:100%;
    height:30px;
    border:none;
    outline: none;
    background-color: transparent;
    padding: 0;
    text-align: right;
`

export const PopupFromButton = () => {
    return(
        <PopupChangeFromToken>
            <TokenModalFrom></TokenModalFrom>
        </PopupChangeFromToken>
    )
}