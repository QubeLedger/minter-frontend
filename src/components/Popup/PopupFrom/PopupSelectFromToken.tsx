import styled from 'styled-components'
import { PopupFromButton } from '../../Buttons/PopupButtons/PopupFromButton/PopupFromButton'

const PopupSelectTokenFrom = styled.div`
    width:65%;
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-left: 12px;
`


export const PopupSelectFromToken = () => {
    return(
        <PopupSelectTokenFrom>
            <PopupFromButton></PopupFromButton>
        </PopupSelectTokenFrom>
    )
}