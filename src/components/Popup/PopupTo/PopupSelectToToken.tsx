import styled from 'styled-components'
import { PopupToButton } from '../../Buttons/PopupButtons/PopupToButton/PopupToButton'

const PopupSelectTokenTo = styled.div`
    width:65%;
    height:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-left: 18px;
`

export const PopupSelectToToken = () => {
    return(
        <PopupSelectTokenTo>
            <PopupToButton></PopupToButton>
        </PopupSelectTokenTo>
    )
}