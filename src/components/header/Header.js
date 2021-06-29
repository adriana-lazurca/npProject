import React from 'react';
import Logo from '../logo/Logo';
import NavigationBar from '../navbar/NavigationBar';
import Login from '../login/Login';
import './Header.css'

function Header() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <Logo />
                </div>
                <div className="col-6">
                    <NavigationBar />
                </div>
                <div className="col-3">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Header;