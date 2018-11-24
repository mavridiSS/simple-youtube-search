import React, { Component } from 'react';

class SearchBar extends Component {

    state = { searchTerm: '' }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event => this.handleInputChange(event)} />
            </div>
        );
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({
            searchTerm: value
        });
        this.props.onSearchChange(value);
    }
}

export default SearchBar;