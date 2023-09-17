// import React from 'react';
import React, { useState, useEffect } from 'react';

import './RideCard.css';


function RideCard(props){
    const {ride} = props;
    return(
        <div className="ride-card">
            <p>Origin: {ride.origin}</p>
            <p>Destination: {ride.destination}</p>
            <p>Driver: {ride.driver}</p>
        </div>
    )
}
export default RideCard;