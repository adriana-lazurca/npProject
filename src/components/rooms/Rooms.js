import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import Room from '../room/Room';

class Rooms extends React.Component {
    // name;

    constructor(props) {
        super(props);

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

        this.state = {
            options,
            selectedOption: null,
            isCategorySelected: false
        }
        //this.initialOption = this.state
    }

    render() {
        const Placeholder = () => (
            <p>Select a category...</p>
        );

        const { rooms } = this.props;

        this.changeOption = (selectedOption) => {
            this.setState(prevState => ({
                ...prevState,
                selectedOption
            }));
        }

        this.clearFilter = () => this.setState(prevState => ({
            ...prevState,
            selectedOption: null
        }))

        const { selectedOption, options } = this.state;

        const isOptionSelected = selectedOption != undefined;

        const selectedRooms = rooms.filter(room => !isOptionSelected || room.category === selectedOption.value);

        return (
            <>
                <div className="row">
                    <div className="container">
                        <Select
                            className="col-4"
                            value={selectedOption}
                            options={options}
                            onChange={this.changeOption}
                            isSearchable={true}
                            components={{ Placeholder }}
                        />
                        <button onClick={this.clearFilter}>X</button>
                    </div>

                    {isOptionSelected && <p> {selectedRooms.length} rooms found</p>}

                    {selectedRooms.map((room) => <Room key={room.id} room={room} />)}
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
