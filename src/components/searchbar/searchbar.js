import React from "react";
import { Component } from "react";

export class Searchbar extends Component {



  handleSubmit = event => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === "") {
      alert("Please enter a search term!");
      return;
    }
    const newQuery = event.target.elements.query.value;
    this.props.onSumbit(newQuery)
    event.target.reset();
  };

render() {
  return(
    <header className="searchbar">
<form className="form" onSubmit={this.handleSubmit}>
<button type="submit" className="button">
  <span className="button-label">Search</span>
</button>

<input
  className="input"
  type="text"
  name="query"
  autoComplete="off"
  autoFocus
  placeholder="Search images and photos"
/>
</form>
</header>
);
};
};