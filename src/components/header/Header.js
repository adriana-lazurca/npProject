import React, { useState } from 'react';
import Logo from '../logo/Logo';
import NavigationBar from '../navbar/NavigationBar';
import Login from '../login/Login';
import './Header.css'

export const ThemeContext = React.createContext()

function Header() {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }

    return (
        <div className="container-fluid header-color mb-5">
            <div className="row header">
                <ThemeContext.Provider value={{
                    theme: theme,
                    toggleTheme: toggleTheme,
                }} >
                    {/* <button onClick={toggleTheme}>Toggle theme</button> */}
                    < div className="col-3">
                        <Logo />
                    </div>
                    <div className="col-6">
                        <NavigationBar />
                    </div>
                    <div className="col-3">
                        <Login />
                    </div>
                </ThemeContext.Provider>
            </div>
        </div >
    )
}

export default Header;