import React from 'react';
import './MainContent.css';
import { ROOMS } from '../../constants';

import Rooms from '../rooms/Rooms.js';

function MainContent() {
    const rooms = ROOMS;
    return (
        <>
            <div className="container img-container img-fluid mx-auto text-center"></div>
            <Rooms rooms={rooms}/>
        </>
    )
}

export default MainContent;