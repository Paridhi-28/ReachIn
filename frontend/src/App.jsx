import React from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import OneBoxPage from './components/OneBoxPage/OneBoxPage';

function App() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <ThemeProvider>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {!loggedIn ? (
                <LoginPage onLogin={() => setLoggedIn(true)} />
            ) : (
                <OneBoxPage />
            )}
        </ThemeProvider>
    );
}

export default App;
