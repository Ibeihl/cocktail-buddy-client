import React from 'react';
import { connect } from 'react-redux';
import { toggleAddDrink } from '../actions/toggle-add';
import '../css/add-drink-btn.css';

export class AddDrinkBtn extends React.Component {
  renderDrinkBtn() {
    let addDrinkButton;
    if(!this.props.addDrink) {
      addDrinkButton = <button className="add-button" onClick={() => this.props.dispatch(toggleAddDrink())}>Add a drink!</button>
    } else {
      addDrinkButton = <button className="add-button" onClick={() => this.props.dispatch(toggleAddDrink())}>Hide drink form!</button>
    }
    return addDrinkButton
  }
  
  render() {
    return (
      <span className="add-drink-btn">
            {this.renderDrinkBtn()}
      </span>
    )
  }
}

const mapStateToProps = state => ({
  addDrink: state.drink.addDrink,
});

export default connect(mapStateToProps)(AddDrinkBtn);
