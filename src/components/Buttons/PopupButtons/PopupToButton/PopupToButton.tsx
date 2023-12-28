import styled from 'styled-components'
import { TokenModalTo } from '../../../Modal/TokenModal/TokenModalTo'
import { useToggleTheme } from '../../../../hooks/useToggleTheme'

const PopupChangeToToken = styled.button <{HoverColor: string}>`
    width:100%;
    height:30px;
    border:none;
    outline: none;
    background-color: transparent;
    padding: 0;
    text-align: right;
    :hover{
        background: ${props => props.HoverColor};
        transition: background .2s ease-in-out;
        border-radius: 10px;
    }
`

export const PopupToButton = () => {
    
    const [theme, setTheme] = useToggleTheme()

    return(
        <PopupChangeToToken HoverColor={theme.HoverColor}>
            <TokenModalTo></TokenModalTo>
        </PopupChangeToToken>
    )
}