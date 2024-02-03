import { useEffect } from 'react'
import { MainPages } from './components/MainPages/MainPages';
import { ThemeDefaultState, ThemeWhiteState, useToggleTheme } from './hooks/useToggleTheme';
import styled from 'styled-components';


const AppPage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`

function App() {
        const [theme, setTheme] = useToggleTheme();

        useEffect(() => {
                if (localStorage.getItem('minterTheme') != "") {
                setTheme(localStorage.getItem('minterTheme') == 'black' ? ThemeDefaultState : ThemeWhiteState)
                } else {
                setTheme(ThemeDefaultState)
                }
        }, [])
        return (
                <AppPage>
                        <MainPages ></MainPages>
                </AppPage>
        );
}

export default App;
