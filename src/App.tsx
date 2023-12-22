import { useEffect } from 'react'
import { MainPages } from './components/MainPages/MainPages';
import { ThemeDefaultState, ThemeWhiteState, useToggleTheme } from './hooks/useToggleTheme';


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
                <MainPages ></MainPages>
        );
}

export default App;
