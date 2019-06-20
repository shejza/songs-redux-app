import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <Fragment>
        <div className="search-bar ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Video Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
