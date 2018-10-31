import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../css/user-greeting.css';
import { clearDrinks } from '../actions/drink';

export class UserGreeting extends React.Component {
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
            <div className="user-greeting">
                    <h3>Welcome {user}</h3>
                    {logOutButton}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(UserGreeting);