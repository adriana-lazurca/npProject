import React from 'react';
import Logo from '../logo/Logo';
import NavBar from '../navbar/NavBar';
import Login from '../login/Login';
import './Header.css'



function Header() {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <Logo />
                    </div>
                    <div class="col-6">
                        <NavBar />
                    </div>
                    <div class="col-3">
                        <Login />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;