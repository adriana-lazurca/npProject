import React from 'react';

import { FcCheckmark } from 'react-icons/fc';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            text: '',
            isAgreeing: false,
            gender: "",
            roomTypes: "",
            isFormSubmitted: false
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
            this.setState({ isFormSubmitted: true })
            event.preventDefault();
        }

        if (this.state.isFormSubmitted) {
            return (
                <>
                    <FcCheckmark size={70} />
                    <h4 className="mt-3">Thank you!</h4>
                    <p>Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your prefered room: {this.state.roomTypes}</p>
                    <p>Comment: {this.state.text}</p>
                </>
            );
        }

        return (
            < div className="ms-4" >
                < p > Your opinion is very important to us!</p >
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
                    <label className="mt-3">Sugesstions:</label>
                    <br />
                    <textarea
                        name="text"
                        value={this.state.text}
                        onChange={handleChange}
                    />
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
            </div >
        );
    }
}

export default Reviews;