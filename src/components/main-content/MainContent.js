import React from 'react';
import './MainContent.css';
import { ROOMS } from '../../constants';

import Rooms from '../rooms/Rooms.js';
import Welcome from '../welcome/Welcome.js';

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            phrase: 'Take a look at our rooms...'
        }
    }

    render() {
        const rooms = ROOMS;
        return (
            <>
                <div className="container img-container img-fluid mx-auto text-center"></div>
                <Welcome phrase={this.state.phrase} />
                <Rooms rooms={rooms} />
            </>
        )
    }
}

export default MainContent;