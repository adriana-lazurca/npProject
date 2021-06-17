import React from 'react';
import './MainContent.css';
import Rooms from '../rooms/Rooms.js';

function MainContent() {

    return (
        <>
            <div className="container img-container img-fluid mx-auto text-center"></div>
            <Rooms />
        </>
    )
}

export default MainContent;