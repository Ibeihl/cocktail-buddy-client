import React from 'react';
import './drink-form.css';
import {Field, reduxForm} from 'redux-form';
import {addDrink} from '../actions/addDrink';
import {required} from './validators';
import {connect} from 'react-redux';
import Input from './input';
import {searchDrink} from '../actions/drink';

export class DrinkForm extends React.Component {
    onSubmit(values) {
        console.log(this.props.currentUser);
        const user = this.props.currentUser;
        const {name, method, eggWhite, glass, ingredient1,
             ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instructions, photo} = values;
        let inputIngredients = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6];
        let ingredients = inputIngredients.filter(ingredient => ingredient !== undefined);
        const newDrink = {name, method, eggWhite, glass, ingredients, instructions, photo, user};
        this.props.dispatch(addDrink(newDrink));
        this.props.dispatch(searchDrink(this.props.currentUser));
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
                <fieldset className="drink-form">
                    <legend>Add your own cocktail recipe!</legend>
                    <div className="drink-atr">
                        <label htmlFor="name">Name:</label>
                        <Field component={Input} name="name" id="name" type="text" placeholder="Gold Rush"
                            ref={input => this.name = input}
                            validate={required}/>
                    </div>
                    <div className="drink-atr">
                        <Field component={Input} type="radio" id="addShaken" name="method"
                            value="shaken" defaultChecked
                             checked={true}/>
                        <label htmlFor="shaken">Shaken</label>
                        <Field component={Input} type="radio" id="addStirred" name="method"
                            value="stirred"  />
                        <label htmlFor="stirred">Stirred</label>
                    </div>
                    <div className="drink-atr">
                        <Field component={Input} type="radio" id="EggWhiteYes" name="eggWhite"
                            value="yes" />
                        <label htmlFor="yesEggWhite">Has Egg White</label>
                        <Field component={Input} type="radio" id="EggWhiteNo" name="eggWhite" defaultChecked
                            value="no"  checked={true}/>
                        <label htmlFor="noEggWhite">No Egg White</label>
                    </div>
                    <div className="drink-atr">
                        <label htmlFor="glass">Glass:</label>
                        <Field component={Input} className="glass" htmlFor="glass" type="text" id="glass"
                            name="glass" placeholder="coupe" validate={required}/>
                    </div>
                    <div className="drink-atr">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <Field component={Input} name="ingredient1" className="ingredient-input" htmlFor="ingredients" type="text" id="ingredient1" placeholder="2 oz Bourbon" validate={required}/>
                        <Field component={Input} name="ingredient2" className="ingredient-input" htmlFor="ingredients" type="text" id="ingredient2" placeholder="3/4 oz Lemon"/>
                        <Field component={Input} name="ingredient3" className="ingredient-input" htmlFor="ingredients" type="text" id="ingredient3" placeholder="3/4 oz Honey Syrup"/>
                        <Field component={Input} name="ingredient4" className="ingredient-input" htmlFor="ingredients" type="text" id="ingredient4"/>
                        <Field component={Input} name="ingredient5" className="ingredient-input" htmlFor="ingredients" type="text" id="ingredient5"/>
                        <Field component={Input} name="ingredient6" className="ingredient-input" htmlFor="ingredients" type="text" id="ingredient6"/>
                    </div>
                    <div className="drink-atr">
                        <label htmlFor="instructions">Instructions:</label>
                        <Field component={Input} className="instructions-input" name="instructions" htmlFor="instructions" type="text" id="instructions" 
                            placeholder="Shake, strain over rocks, garnish with lemon twist"
                            validate={required}/>
                    </div>
                    <div className="drink-atr">
                    <label htmlFor="photo">Image Link:</label>
                        <Field component={Input} className="ingredient-input" name="photo" htmlFor="photo" type="text" id="photo"/> 
                    </div>
                    <button className="submit-btn" type="submit">Add Drink</button>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser.username
});

export default connect(mapStateToProps)(reduxForm({
    form: 'drink'
})(DrinkForm));
