import React from 'react';
import MiniHotelFoto from '../../assets/images/hotel-room.jpg';
//import { ROOMS } from '../../constants';


function Room() {
    //     const rooms = ROOMS.map((room) => ({
    //         price: room.price,

    //       }))
    //console.log(rooms)

    return (
        <>
            <div className="card p-3" style={{ width: '18rem' }}>
                <img src={MiniHotelFoto} className="card-img-top" alt="" />
                <div className="card-body">
                    <p className="card-text">Room1</p>
                </div>
            </div>
        </>
    )
}

export default Room;
