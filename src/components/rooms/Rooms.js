import React from 'react';
import PropTypes from 'prop-types';
import Room from '../room/Room';

function Rooms({ rooms }) {

    return (
        <div className="row">
            {rooms.map((room) => <Room key={room.name} room={room}/>)}
        </div>
    )
}

Rooms.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number
    })).isRequired
};

export default Rooms;
