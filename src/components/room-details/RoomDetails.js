import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MiniHotelFoto from '../../assets/images/hotel-room.jpg';
import { useLocation, useParams } from "react-router-dom";
import { ROOMS } from '../../constants';

function RoomDetails(props) {

    const { state } = useLocation();

    let { id } = useParams();

    const room =
        state ? state.room : ROOMS.find(room => room.id == parseInt(id));




    // const chosenRoom = ROOMS.find(room => room.id == parseInt(id))
    // console.log(typeof id);
    // const displayRoom = state.room ? state.room : chosenRoom;



    return (
        <div className="col-3 card p-3 my-3 mx-auto">
            <img src={MiniHotelFoto} className="card-img-top" alt="" />

            <div className="card-body">
                <p>{room.name}</p>
                <p>{room.category}</p>
            </div>
        </div>
    )
}

export default RoomDetails;
