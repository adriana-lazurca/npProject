import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MiniHotelFoto from '../../assets/images/hotel-room.jpg';
import { Link } from 'react-router-dom';

function Room(props) {

    const { room } = props;

    const handleMouseOver = (event) => {
        const { style } = event.target;
        style.transform = 'scale(1.2)'
    }

    const handleMouseOut = (event) => {
        const { style } = event.target;
        style.transform = 'scale(1)'
        style.transitionDuration = '0.5s'
    }

    const withCurrency = (amount, currency) => {
        return amount.toLocaleString(currency, { style: "currency", currency: "USD" });
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
                    {room.price ?
                        withCurrency(room.price, "en-US")
                        : 'ask for a price'}
                </li>
                {/* <li> */}
                    <Link
                        to={{
                            pathname: `/rooms/${room.id}`,
                            state: { room: room }
                        }}
                    >
                        <button>Learn more</button>
                    </Link>
                {/* </li> */}
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
