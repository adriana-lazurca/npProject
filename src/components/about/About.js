import { React, Component } from 'react';

import FormSubmission from '../form/Form'

class About extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            users: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://reqres.in/api/users")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    users: data
                })
            }
            )
    }

    render() {
        const text = this.state.loading ? 'Loading...' : this.state.users.page;

        return (
            <div>
                {/* <p>{text}</p> */}
                <FormSubmission />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        )
    }
}
export default About;