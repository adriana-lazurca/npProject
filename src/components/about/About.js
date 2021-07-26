import { React, Component } from 'react';

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
                <p>{text}</p>
            </div>
        )
    }
}
export default About;