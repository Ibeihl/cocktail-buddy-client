import React from 'react';
import { connect } from 'react-redux';
import { searchDrink, setSearchTerm } from '../actions/drink';
import './drink-list.css';
import AdvancedSearch from './advanced-search';
import {Redirect} from 'react-router-dom';
import {removeDrink} from '../actions/removeDrink';

export class DrinkList extends React.Component {
    // componentDidMount() {
    //     console.log(localStorage.getItem('authToken'))
    // }

    handleDelete(e) {
        console.log(e.target.id);
        let drinkId = e.target.id; 
        this.props.dispatch(removeDrink(drinkId));
        
        //need to pull drink data, attach to username, then make
        //a delete request to remove drink from db
    }

    renderResults() {
        if (this.props.loading) {
            return <strong>loading....</strong>;
        }
        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }
        const drinks = this.props.drinks.map((drink) => {
            const ingredients = drink.ingredients.map((ingredient, index) =>
                <li key={index} className="ingredient-list">
                    {ingredient}
                </li>
            );
            let deleteButton = '';
            if (drink.user !== null) {
                deleteButton =
                <button id={drink.id} onClick={(e) => this.handleDelete(e)}>Remove your drink</button>

            }
            return (
                <li key={drink.id} className="drink-list-item">
                    <img className="result-img" src={drink.photo} alt={drink.name} />
                    <h2>{drink.name}</h2>
                    <div>
                    <ul className="ingredient-list">
                        <h3 className="ingredient-header">Ingredients</h3>
                        {ingredients}
                    </ul>
                    </div>
                    <ul>
                        <li className="drink-atr"><strong>Style: </strong>{drink.method}</li>
                        <li className="drink-atr"><strong>Has Egg White: </strong>{drink.eggWhite}</li>
                        <li className="drink-atr"><strong>Glass: </strong>{drink.glass}</li>
                        <li className="drink-atr"><strong>Instructions: </strong>{drink.instructions}</li>
                    </ul>
                    {deleteButton}
                </li>
            )
        }
        );
        let drinkCount;
        if (this.props.drinks.length === 0){
            drinkCount = '';
        } else {
            drinkCount = <h4>{this.props.drinks.length} drinks found</h4>
        }
        return (
            <div className="drink-results">
               {drinkCount}
                <ul>
                    {drinks}
                </ul>
            </div>
        );
    }

    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '' || this.input.value.trim() === undefined) {
            return;
        }
        this.props.dispatch(setSearchTerm(`search=${this.input.value}`));
        this.props.dispatch(searchDrink(`search=${this.input.value}`, '', '', ''));
    }

    componentWillUpdate(nextProps){
        console.log(nextProps);
    }

    render() {
        // // console.log(this.props);
        // if (this.props.loggedIn === null) {
        //     // return <Redirect to="/login" />
        // }
        return (
            <div className="drink-search">
                <div>
                <form onSubmit={(e) => this.search(e)}>
                    <input className="search-input" type="search"
                        ref={input => this.input = input} 
                        placeholder="keyword"/>
                    <button className="search-button">Search</button>
                </form>
                <AdvancedSearch />
                </div>
                <ul className="drink-results">
                    {this.renderResults()}
                </ul>
            </div>
                );
            }

        };


const mapStateToProps = state => ({
            loading: state.drink.loading,
            error: state.drink.error,
            drinks: state.drink.drinks,
            loggedIn: state.auth.authToken

        });
        
export default connect(mapStateToProps)(DrinkList);