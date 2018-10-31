import React from 'react';
import { connect } from 'react-redux';
import DrinkForm from './drink-form';

export class AddDrink extends React.Component {
  render() {
    let drinkForm;
    if (this.props.addDrink === false) {
      drinkForm = '';
    } else if (this.props.addDrink === true) {
      drinkForm = <DrinkForm />;
    }
    return (
          <div className="add-drink">
              { drinkForm }
            </div>
    );
  }
}

const mapStateToProps = state => ({
  addDrink: state.drink.addDrink,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(AddDrink);
