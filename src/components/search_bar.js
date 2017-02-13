import React, { Component } from 'react';

class SearchBar extends Component {
	// Define a new class that has all the
	// functionality from a React Component
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value}) } />
  		</div>
		);
	}



}

// ^Defined a component named SearchBar
// This is a functional component because it
// literally is a function.


export default SearchBar;