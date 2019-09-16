import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div
        className="search-bar ui segment"
        style={{
          marginTop: "25px",
          backgroundColor: "rgba(7, 27, 82)"
        }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ color: "white" }}>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
