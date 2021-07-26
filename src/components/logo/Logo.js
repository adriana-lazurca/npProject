import React, { useContext } from 'react';
import { ThemeContext } from '../header/Header';

import LogoUrl from '../../assets/images/hotel-logo.jpg'
import {Link} from 'react-router-dom';

import './Logo.css';


function Logo(props) {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor: theme ? 'black' : 'pink',
        color: 'white'
    }

    //const { toggleTheme } = props;

    return (
        <>
            <button style={themeStyle}
                onClick={() => toggleTheme()}>
                <Link to="/"><img src={LogoUrl} alt='' className="logo"></img></Link>
            </button>
        </>
    )
}

export default Logo;