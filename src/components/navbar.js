import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../css/navbar.css';
import { clearDrinks } from '../actions/drink';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatch(clearDrinks());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }

        let user = this.props.currentUser;
        user = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);

        return (
            <header>
                <ul className="nav">
                    <li>Welcome {user}</li>
                    <li>{logOutButton}</li>
                </ul>
            </header>
        )
    }
}


const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);