import React from 'react';
import DrinkList from './drink-list';
import AddDrink from './add-drink';
import AddDrinkBtn from './add-drink-btn';
import Navbar from './navbar';
import UserGreeting from './user-greeting'
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { loadAuthToken } from '../local-storage';
import { setAuthToken } from '../actions/auth';
import SearchBar from './search-bar';
import Dropdown from './dropdown';
import Frame from '../images/gold-frame.png';
import '../css/main.css';

export class Main extends React.Component {
    componentDidMount() {
        const authToken = loadAuthToken();
        if (authToken) {
            const token = authToken;
            this.props.dispatch(setAuthToken(token));
        }
    }

    render() {
        const style = {
            borderImage: 'url('+ Frame +') 93 92 87 92 stretch stretch'
        }
        return (
            <div className="main">
                <div className="bar-scene" style={style}>
                    <Navbar />
                    <UserGreeting />
                    <div className="add-search">
                        <AddDrinkBtn />
                        <SearchBar />
                        <Dropdown />
                    </div>
                </div>
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