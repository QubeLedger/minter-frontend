import styled from 'styled-components'
import { PopupFromButton } from '../../Buttons/PopupButtons/PopupFromButton/PopupFromButton'

const PopupSelectTokenFrom = styled.div`
    max-width: 100%;
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-left: 15px;
`


export const PopupSelectFromToken = () => {
    return(
        <PopupSelectTokenFrom>
            <PopupFromButton></PopupFromButton>
        </PopupSelectTokenFrom>
    )
}