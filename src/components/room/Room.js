import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MiniHotelFoto from '../../assets/images/hotel-room.jpg';
import { Link } from 'react-router-dom';

function Room(props) {

    const { room } = props;
    //const [scale, setScale] = useState(0);
    const handleMouseOver = (event) => {
        event.target.style.transform = 'scale(1.2)'
        //setScale(console.log(scale))
    }

    const handleMouseOut = (event) => {
        event.target.style.transform = 'scale(1)'
        event.target.style.transitionDuration= '0.5s'
    }

    return (
        <div className="col-3 card p-3 my-3 mx-auto">
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={MiniHotelFoto} className="card-img-top" alt="" />
            </button>
            <div className="card-body">
                <li>{room.name}</li>
                <li style={{ display: !room.category && 'none' }}>Category: {room.category}</li>
                <li>Price:
                    {room.price ? room.price.toLocaleString("en-US", { style: "currency", currency: "USD" })
                        : 'ask for a price'}
                </li>
                <li><Link to="/rooms">Learn more</Link></li>
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
