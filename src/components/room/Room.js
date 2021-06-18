import React from 'react';
import PropTypes from 'prop-types';
import MiniHotelFoto from '../../assets/images/hotel-room.jpg';

function Room(props) {

    const { room } = props;

    return (
        <div className="col-3 card p-3 my-3 mx-auto">
            <img src={MiniHotelFoto} className="card-img-top" alt="" />
            <div className="card-body">
                <li>{room.name}</li>
                <li style={{ display: !room.category && 'none' }}>Category: {room.category}</li>
                <li>Price: {room.price ? room.price : 'ask for a price'} $</li>
            </div>
        </div>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number
    }).isRequired
};

export default Room;
