import React from 'react';
import {connect} from 'react-redux';
import { setDisplayCat } from '../actions/set-display';

export class Dropdown extends React.Component {
    handleDropdown(e) {
        const displayCat = e.target.value;
        console.log(displayCat);
        this.props.dispatch(setDisplayCat(displayCat));
    }

    render() {
        return (
            <select onChange={(e) => this.handleDropdown(e)} className="dropdown">
                <option value="all">All</option>
                <option value="favorites">Favorites</option>
                <option value="userDrinks">Your Drinks</option>
                <option value="classic">Classic</option>
            </select>
        )
    }
}

const mapStateToProps = state => ({
    displayCat: state.drink.displayCat,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Dropdown);