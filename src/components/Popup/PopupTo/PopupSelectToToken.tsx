import styled from 'styled-components'
import { PopupToButton } from '../../Buttons/PopupButtons/PopupToButton/PopupToButton'

const PopupSelectTokenTo = styled.div`
    width:30%;
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

export const PopupSelectToToken = () => {
    return(
        <PopupSelectTokenTo>
            <PopupToButton></PopupToButton>
        </PopupSelectTokenTo>
    )
}