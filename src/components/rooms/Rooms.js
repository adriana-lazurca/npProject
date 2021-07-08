import React from 'react';
import PropTypes from 'prop-types';
import Room from '../room/Room';
import Select from 'react-select';

class Rooms extends React.Component {
    name;

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            isCategorySelected: false
        }
        this.initialOption=this.state
    }

    render() {
        const Placeholder = () => (
            <p>Select a category...</p>
        );

        const { rooms } = this.props;

        const categories = rooms
            .map(room => room.category)
            .filter(category => category !== undefined)

        //console.log(`categories${categories}`)

        const options = categories.map((option) => {
            return {
                label: option,
                value: option
            }
        });
        //console.log(`options ${options}`);

        this.handleChange = (selectedOption) => {
            this.setState({ selectedOption: selectedOption.label, isCategorySelected: true});
            //searchRoomCat(selectedOption);
        }

        const sameCategory = rooms
            .map(room => room)
            .filter(room => room.category === this.state.selectedOption)

        //console.log(`room.category ${room.category}`);

        //const { isCategorySelected } = this.props;
        this.handleClick = () => this.setState( this.initialOption)

        console.log(`this.state.selectedOption ${this.state.selectedOption}`);

        //console.log(isCategorySelected);

        return (
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
                {/* {isCategorySelected ? rooms.map((room) => <Room key={room.id} room={room} />)
                    : sameCategory.map((room) => <Room key={room.id} room={room} />)} */}
                {this.state.isCategorySelected ? sameCategory.map((room) => <Room key={room.id} room={room} />)
                    : rooms.map((room) => <Room key={room.id} room={room} />)}
            </div>
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
