import React from 'react';
import Logo from '../logo/Logo';
import NavBar from '../navbar/NavBar';
import Login from '../login/Login';
import './Header.css'



function Header() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Logo />
                    </div>
                    <div className="col-6">
                        <NavBar />
                    </div>
                    <div className="col-3">
                        <Login />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;