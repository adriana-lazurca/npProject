import React from 'react'

function NavBar() {
    return (
        <>
            <div class="row">
                <div class="">

                    <nav class="navbar navbar-expand-sm navbar-light bg-red">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav nav-text">
                                <li class="nav-item p-3">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item p-3">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item p-3">
                                    <a class="nav-link" href="#">Rooms</a>
                                </li>
                                <li class="nav-item p-3">
                                    <a class="nav-link" href="#">Reviews</a>
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