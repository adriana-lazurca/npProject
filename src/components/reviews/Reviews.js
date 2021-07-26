import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            text: '',
            isAgreeing: false,
            gender: "",
            roomTypes: "Single"
        };
    }

    render() {
        const handleChange = (event) => {
            const { name, value, type, checked } = event.target
            type === "checkbox" ?
                this.setState(
                    { [name]: checked }
                )
                :
                this.setState(
                    { [name]: value }
                );
        }

        const handleSubmit = (event) => {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={handleChange}
                    />
                    <br />
                    <textarea
                        placeholder="Write your suggestion"
                        name="text"
                        value={this.state.text}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="checkbox"
                        name="isAgreeing"
                        checked={this.state.isAgreeing}
                        onChange={handleChange}
                    />
                    <label>Do you agree with the terms?</label>
                    <br />
                    <label>Gender:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={handleChange}
                    />female
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={handleChange}
                    />male
                    <br />
                    <label className='m-3'>What kind of room do you prefer?</label>
                    <br />
                    <select className='m-3'
                        value={this.state.roomTypes}
                        name="roomTypes"
                        onChange={handleChange}
                    >
                        <option value="Single">Single</option>
                        <option value="Family">Family</option>
                        <option value="Couple">Couple</option>
                    </select>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <h4>Your name is: {this.state.firstName} {this.state.lastName}</h4>
                <div>Text: {this.state.text}</div>
                <h4>Your gender: {this.state.gender}</h4>
                <h4>Your prefered room: {this.state.roomTypes}</h4>
            </>
        );
    }
}

export default Reviews;