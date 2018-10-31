import React from 'react';
import {toggleAddDrink} from '../actions/toggle-add';
import {connect} from 'react-redux';
import '../css/add-drink-btn.css'

export class AddDrinkBtn extends React.Component {
    render(){
        return (
            <button className="add-button" onClick={() => this.props.dispatch(toggleAddDrink())}>Add a drink!</button>
        )
    }
}

const mapStateToProps = state => ({
    addDrink: state.drink.addDrink
});

export default connect(mapStateToProps)(AddDrinkBtn);