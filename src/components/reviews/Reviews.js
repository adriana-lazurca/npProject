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
            roomTypes: ""
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
                <div className="ms-4">
                    <p>Your opinion is very important to us!</p>
                    <form onSubmit={handleSubmit}>
                        <input className=""
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={handleChange}
                        />
                        <input className=""
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={handleChange}
                        />
                        <br />
                        <label className="mt-3">Gender:
                            <input className="ms-3"
                                type="radio"
                                name="gender"
                                value="female"
                                checked={this.state.gender === "female"}
                                onChange={handleChange}
                            />female
                        </label>
                        <label>
                            <input className="ms-3"
                                type="radio"
                                name="gender"
                                value="male"
                                checked={this.state.gender === "male"}
                                onChange={handleChange}
                            />male
                        </label>
                        <br />
                        <label className="mt-3">Sugesstions:</label>
                        <br />
                        <textarea
                            placeholder="Write your suggestion"
                            name="text"
                            value={this.state.text}
                            onChange={handleChange}
                        />
                        <br />
                        <label >What kind of room do you prefer?</label>

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
                        <label>
                            <input
                                type="checkbox"
                                name="isAgreeing"
                                checked={this.state.isAgreeing}
                                onChange={handleChange}
                            />
                            I agree with the terms and conditions
                            <br />
                            <input className="mt-3" type="submit" value="Submit" />
                        </label>
                    </form>

                    <h4 className="mt-3">Your name is: {this.state.firstName} {this.state.lastName}</h4>
                    <div>Text: {this.state.text}</div>
                    <h4>Your gender: {this.state.gender}</h4>
                    <h4>Your prefered room: {this.state.roomTypes}</h4>
                </div>
            </>
        );
    }
}

export default Reviews;