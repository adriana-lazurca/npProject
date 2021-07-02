import React from 'react';
import {Link} from 'react-router-dom';

function Welcome({phrase}){
    return(
        <div>
            <p><Link to="/rooms">{phrase}</Link></p>
        </div>
    )
}
export default Welcome;