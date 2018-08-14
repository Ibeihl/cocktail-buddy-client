import React from 'react';
import DrinkList from './drink-list';
import AddDrink from './add-drink';
import AddDrinkBtn from './add-drink-btn';
import UserGreeting from './user-greeting';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';
import {loadAuthToken} from '../local-storage';
import {setAuthToken, refreshAuthToken} from '../actions/auth';

export class Main extends React.Component {
    componentDidMount() {
        const authToken = loadAuthToken();
        if (authToken) {
            const token = authToken;
            this.props.dispatch(setAuthToken(token));
            // this.props.dispatch(refreshAuthToken());
        }
    }

    render() {
        return (
            <div className="main">
                <UserGreeting />
                <AddDrinkBtn />
                <AddDrink />
                <DrinkList />
            </div>

        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.authToken
});

export default requiresLogin()(connect(mapStateToProps)(Main));