import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import Room from '../room/Room';

class Rooms extends React.Component {
    // name;

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            isCategorySelected: false
        }
        this.initialOption = this.state
    }

    render() {
        const Placeholder = () => (
            <p>Select a category...</p>
        );

        const { rooms } = this.props;

        const categories = [...new Set(rooms
            .map(room => room.category)
            .filter(category => category !== undefined)
        )];

        const options = categories.map((option) => {
            return {
                label: option,
                value: option
            }
        });

        const selectedRoom = rooms
            .find(room => room.category === this.state.selectedOption)

        this.handleChange = (selectedOption) => {
            this.setState({ selectedOption: selectedOption.label, isCategorySelected: true });
        }

        this.handleClick = () => this.setState(this.initialOption)

        return (
            <>
                <div className="row">
                    <div className="container">
                        <Select
                            className="col-4"
                            options={options}
                            onChange={this.handleChange}
                            isSearchable={true}
                            components={{ Placeholder }}

                        />
                        <button onClick={this.handleClick}>X</button>
                    </div>
                    
                    {this.state.isCategorySelected
                        ? <Room room={selectedRoom} />
                        : rooms.map((room) => <Room key={room.id} room={room} />)}
                </div>
            </>
        )
    }
}


Rooms.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number
    })).isRequired
};

export default Rooms;
