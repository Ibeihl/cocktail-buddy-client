import React from 'react';
import {connect} from 'react-redux';
import { setDisplayCat } from '../actions/set-display';
import { searchDrink } from '../actions/drink';

export class Dropdown extends React.Component {
    componentDidUpdate() {
        const displayCatQuery = `&displayCat=${this.props.displayCat}`
        this.props.dispatch(searchDrink(this.props.currentUser.username, displayCatQuery))
    }
    
    handleDropdown(e) {
        const displayCat = e.target.value;
        this.props.dispatch(setDisplayCat(displayCat));
    }

    render() {
        return (
            <div className="dropdown">
                <label htmlFor="dropdown">Choose Category:</label>
            <select onChange={(e) => this.handleDropdown(e)} className="dropdown">
                <option value="all">All</option>
                <option value="favorites">Favorites</option>
                <option value="userDrinks">Your Drinks</option>
                <option value="classic">Classic</option>
            </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    displayCat: state.drink.displayCat,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Dropdown);