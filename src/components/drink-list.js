import React from 'react';
import { connect } from 'react-redux';
import { searchDrink, setSearchTerm } from '../actions/drink';
import './drink-list.css';
// import AdvancedSearch from './advanced-search';
import {removeDrink} from '../actions/removeDrink';
import { editFavorite } from '../actions/favorites';
import Dropdown from './dropdown';

export class DrinkList extends React.Component {
    componentDidMount(){
        let currentUser = this.props.currentUser.username;
        console.log(currentUser)
        this.props.dispatch(searchDrink(currentUser))
        //why is this not working properly
    }
    handleDelete(e) {
        let drinkId = e.target.id; 
        this.props.dispatch(removeDrink(drinkId));
        this.props.dispatch(searchDrink(this.props.currentUser.username));
    }

    handleFavorite(e) {
        const drinkId = e.target.parentElement.id;
        const favorite = e.target.id;
        const user = this.props.currentUser.username;
        if (!favorite) {
            this.props.dispatch(editFavorite(drinkId, user, favorite));
        } else {
            this.props.dispatch(editFavorite(drinkId, user, favorite))
        }
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
            let userFavorite = "";
            if (drink.favorites !== []) {
                let favorite = drink.favorites.find(favUser => favUser === this.props.currentUser.username)
                if (favorite) {
                    userFavorite = "favorite"
                }
            }
            if (drink.user === this.props.currentUser.username) {
                deleteButton =
                <button id={drink.id} onClick={(e) => this.handleDelete(e)}>Remove your drink</button>

            }
            return (
                <li key={drink.id} id={drink.id} className="drink-list-item">
                    <img className="result-img" src={drink.photo} alt={drink.name} />
                    <h2>{drink.name}</h2>
                        <em>{userFavorite}</em>
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
                    <button id={userFavorite} onClick={e => this.handleFavorite(e)}>favorite?</button>
                </li>
            )
        }
        );
        let drinkCount;
        if (this.props.drinks.length === 0){
            drinkCount = <h4>no drinks found</h4>;
        } else if (this.props.drinks.length === 1){
            drinkCount = <h4>{this.props.drinks.length} drink found</h4>
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
        this.props.dispatch(setSearchTerm(this.input.value));
        this.props.dispatch(searchDrink(this.props.currentUser.username,
            `&search=${this.input.value}`, '', '', '', this.props.authToken));
    }

    render() {
        return (
            <div className="drink-search">
                <span>
                <form onSubmit={(e) => this.search(e)}>
                    <input className="search-input" type="search"
                        ref={input => this.input = input} 
                        placeholder="keyword"/>
                    <button className="search-button">Search</button>
                </form>
                < Dropdown />
                {/* <AdvancedSearch /> */}
                </span>
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
            loggedIn: state.auth.authToken,
            authToken: state.auth.authToken,
            currentUser: state.auth.currentUser
        });
        
export default connect(mapStateToProps)(DrinkList);