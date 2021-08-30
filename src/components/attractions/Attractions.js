import React from 'react';
import { ATTRACTIONS } from '../../constants'
import Attraction from '../attraction/Attraction'

class Attractions extends React.Component {
    constructor() {
        super()
        this.state = {
            subscribersNr: 0,
            attractions: ATTRACTIONS,
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                // ...prevState,
                subscribersNr: prevState.subscribersNr + 1
            }
        })
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const checkedAttractions = prevState.attractions.map(attraction => {
                if (attraction.id === id) { attraction.checked = !attraction.checked }
                return attraction
            })
            return {
                attraction: checkedAttractions
            }
        })
    }

    render() {
        const attractions = this.state.attractions;
        return (
            <>
                <div>
                    <p>Subscribe and be among the {this.state.subscribersNr} clients to know about our discounts on first hand</p>
                    <button onClick={this.handleClick}>Subscribe</button>
                </div >
                <div className="mt-4">
                    <p>Tell us how we can improve our hotel</p>
                    <p>I would like the hotel to have:</p>
                    {attractions.map(attraction =>
                        <Attraction
                            key={attraction.id}
                            attraction={attraction}
                            // checked={attraction.checked}
                            handleChange={this.handleChange}
                        />
                    )}
                </div>
            </>
        )
    }
}
export default Attractions;