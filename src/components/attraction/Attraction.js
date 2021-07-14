import React from 'react';
import './Attraction.css';

class Attraction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { attraction, handleChange, checked } = this.props;

        return (
            <ul>
                <li>
                    <input className="m-3"
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleChange(attraction.id)}>
                    </input>
                    {attraction.description}
                </li>
            </ul>
        )
    }
}

export default Attraction;