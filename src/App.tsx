import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import CV from './components/CV';
import './App.css';

export default function App() {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <CV />
                <div className="ButtonContainer">
                    <button className="ToggleButton" onClick={toggleTheme}>
                        {theme === lightTheme ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </div>
            </div>
        </ThemeProvider>
    );
}
