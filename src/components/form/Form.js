import React from 'react';

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  render() {
    const handleInputChange = (event) => {
      this.setState(
        {
          searchQuery: event.target.value
        }
      );
    }

    const handleClick = () => {
      var searchQuery = this.state.searchQuery;
      var link = "https://youtube.com/results?search_query=" + searchQuery;
      window.open(link, '_blank');
    }

    return (
      <div>
        <input type="text"
          value={this.state.searchQuery}
          onChange={handleInputChange}
        />
        <button
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    );
  }
}