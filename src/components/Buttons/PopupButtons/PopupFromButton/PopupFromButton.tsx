import styled from 'styled-components'
import { TokenModalFrom } from '../../../Modal/TokenModal/TokenModalFrom'
import { useToggleTheme } from '../../../../hooks/useToggleTheme'


const PopupChangeFromToken = styled.button <{HoverColor: string}>`
    max-width: 100%;
    height:30px;
    border:none;
    outline: none;
    background-color: transparent;
    padding: 0;
    text-align: right;
    margin-top: 5px;
`

export const PopupFromButton = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <PopupChangeFromToken HoverColor={theme.HoverColor}>
            <TokenModalFrom></TokenModalFrom>
        </PopupChangeFromToken>
    )
}