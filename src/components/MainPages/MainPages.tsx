import styled from 'styled-components'
import { MainHeader } from '../Headers/MainHeader/MainHeader'
import Container from '../index'

const App = styled.div `
    height: 100vh;
    background: linear-gradient(#121212, #1f1f1f);
    overflow:hidden;
    display: flex;
    flex-direction: column;
`



export const MainPages = () => {
    return(
        <App>
            <MainHeader></MainHeader>
            <Container></Container>
        </App>
    )
}