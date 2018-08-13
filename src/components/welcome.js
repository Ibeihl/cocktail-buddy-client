import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleAddDrink} from '../actions/toggle-add';
import './welcome.css';

export class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <img className="welcome-img" alt="welcome cocktail drawing" src="https://static.vinepair.com/wp-content/uploads/2015/04/retro-cocktail-party-header-top.jpg" />
                <p>Looking for the perfect drink for that picky customer?</p>
                <p>We've got your back!</p>

                <button onClick={() => this.props.dispatch(toggleAddDrink())}>Add a drink!</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addDrink: state.drink.addDrink
});

export default connect(mapStateToProps)(Welcome);