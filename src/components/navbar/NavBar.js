import React from 'react'

function NavBar() {
    return (
        <>
            <div className="row">
                <div className="">

                    <nav className="navbar navbar-expand-sm navbar-light bg-red">
                        <a className="navbar-brand" href="#"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-text">
                                <li className="nav-item p-3">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item p-3">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item p-3">
                                    <a className="nav-link" href="#">Rooms</a>
                                </li>
                                <li className="nav-item p-3">
                                    <a className="nav-link" href="#">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default NavBar;