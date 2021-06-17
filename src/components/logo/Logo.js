import React from 'react';
import LogoUrl from '../../assets/images/hotel-logo.jpg'
import './Logo.css';

function Logo() {
    return (
        <>
            <div>
                <img src={LogoUrl} alt='' width="120" height="120" className="logo"></img>
            </div>
        </>
    )
}

export default Logo;