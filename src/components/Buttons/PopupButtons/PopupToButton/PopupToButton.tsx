import styled from 'styled-components'
import { TokenModalTo } from '../../../Modal/TokenModal/TokenModalTo'
import { useToggleTheme } from '../../../../hooks/useToggleTheme'

const PopupChangeToToken = styled.button <{HoverColor: string}>`
    max-width:100%;
    height:30px;
    border:none;
    outline: none;
    background-color: transparent;
    padding: 0;
    text-align: right;
    margin-top: 5px;
`

export const PopupToButton = () => {
    
    const [theme, setTheme] = useToggleTheme()

    return(
        <PopupChangeToToken HoverColor={theme.HoverColor}>
            <TokenModalTo></TokenModalTo>
        </PopupChangeToToken>
    )
}