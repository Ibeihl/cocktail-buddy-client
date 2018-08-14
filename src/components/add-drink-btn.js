import React from 'react';
import {toggleAddDrink} from '../actions/toggle-add';
import {connect} from 'react-redux';

export class AddDrinkBtn extends React.Component {
    render(){
        return (
            <button onClick={() => this.props.dispatch(toggleAddDrink())}>Add a drink!</button>
        )
    }
}


const mapStateToProps = state => ({
    addDrink: state.drink.addDrink
});

export default connect(mapStateToProps)(AddDrinkBtn);