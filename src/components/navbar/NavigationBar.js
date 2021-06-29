import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <nav className="role='navigation' navbar navbar-expand-sm navbar-light bg-red">
                {/* <a
                    role="button"
                    className={`navbar-burger burger ${isOpen && "is-active"}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => setOpen(!isOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="active" id="navbarNav">
                    <ul className="navbar-nav nav-text">
                        <li className="nav-item p-3">

                            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item p-3">

                            <Link className="nav-link" activeClassName="active" to="/about">About</Link>
                        </li>
                        <li className="nav-item p-3">

                            <Link className="nav-link" activeClassName="active" to="/rooms">Rooms</Link>
                        </li>
                        <li className="nav-item p-3">

                            <Link className="nav-link" activeClassName="active" to="/reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;