import styled from 'styled-components'
import { MainHeader } from '../Headers/MainHeader/MainHeader'
import Container from '../index'
import Alert from '../Alert/Alert'
import { useToggleTheme, ThemeDefaultState, ThemeWhiteState } from '../../hooks/useToggleTheme'
import { useEffect } from 'react'



const App = styled.div <{backgroundColor: string}> `
    height: 100vh;
    background: ${props => props.backgroundColor};
    overflow:hidden;
    display: flex;
    flex-direction: column;
`



export const MainPages = () => {

    const [theme, setTheme] = useToggleTheme();

    return(
        <App backgroundColor={theme.backgroundColor}>
                <MainHeader></MainHeader>
                <Alert></Alert>
                <Container></Container>
        </App>
    )
}