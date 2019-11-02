import React, { Component } from 'react';
import './SearchProfile.css';

class SearchProfile extends Component {

    handleForm = e => {
        e.preventDefault();
        let username = this.refs.username.value;
        this.props.fetchProfile(username);
        this.refs.username.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                        <input
                            className="search-box"
                            type="search"
                            ref="username"
                            placeholder="Search GitHub Username" />
                </form>
            </div>
        );
    }
}

export default SearchProfile;