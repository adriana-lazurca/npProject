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
        console.log(attraction)

        return (
            <ul>
                <li className={attraction.checked? 'text-decoration-line-through fst-italic':''}                 >
                    <input className="m-3 "
                        type="checkbox"
                        checked={attraction.checked}
                        onChange={() => handleChange(attraction.id)}>
                    </input>
                    {attraction.description}
                </li >
            </ul >
        )
    }
}

export default Attraction;