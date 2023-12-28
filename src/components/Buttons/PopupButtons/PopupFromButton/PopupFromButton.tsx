import styled from 'styled-components'
import { TokenModalFrom } from '../../../Modal/TokenModal/TokenModalFrom'
import { useToggleTheme } from '../../../../hooks/useToggleTheme'


const PopupChangeFromToken = styled.button <{HoverColor: string}>`
    width:100%;
    height:30px;
    border:none;
    outline: none;
    background-color: transparent;
    padding: 0;
    text-align: right;
    margin-top: 5px;
    :hover{
        background: ${props => props.HoverColor};
        transition: background .3s ease-in-out;
        border-radius: 10px;
    }
`

export const PopupFromButton = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <PopupChangeFromToken HoverColor={theme.HoverColor}>
            <TokenModalFrom></TokenModalFrom>
        </PopupChangeFromToken>
    )
}