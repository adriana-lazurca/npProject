import React from 'react';
import PropTypes from 'prop-types';
import Room from '../room/Room';
import Select from 'react-select';

class Rooms extends React.Component {
    name;

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
    }

    render() {
        // const selectedOption = this.state;

        // const searchRoom = selectedOption => rooms.filter(room => {
        //     return room.category.toLowerCase().includes(selectedOption.toLowerCase())
        // })

        const { rooms } = this.props;

        const categories = rooms
            .map(room => room.category)
            .filter(category => category !== undefined)

        console.log(categories)
        
        const options = categories.map((option) => {
            return {
                label: option,
                value: option
            }
        });
        console.log(options);

        // controlSubTitles = a.map((subtitle) => {
        //     return {
        //       value: subtitle,
        //       label: subtitle
        //     }
        //   })

        // const options = [
        //     {
        //         value: categories,
        //         label: categories
        //     }
        // ]

        const Placeholder = () => (
            <p>Select a category...</p>
        );


        const searchRoomCat = selectedOption => {
            //searchRoom();
            //console.log(searchRoom)

        }

        this.handleChange = (selectedOption) => {
            this.setState({ selectedOption });
            //searchRoomCat(selectedOption);
        }

        console.log(this.state.selectedOption);
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
                </div>
                {rooms.map((room) => <Room key={room.id} room={room} />)}
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
