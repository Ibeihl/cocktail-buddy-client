import React from 'react';
import { connect } from 'react-redux';
import { searchDrink, setSearchTerm } from '../actions/drink';
import '../css/drink-list.css';
import {removeDrink} from '../actions/removeDrink';
import { editFavorite } from '../actions/favorites';
import Dropdown from './dropdown';
import SearchBar from './search-bar';

export class DrinkList extends React.Component {
    componentDidMount(){
        let currentUser = this.props.currentUser.username;
        let displayCatQuery = `&displayCat=${this.props.displayCat}`
        this.props.dispatch(searchDrink(currentUser, displayCatQuery))
    }
    handleDelete(e) {
        let drinkId = e.target.id; 
        let displayCatQuery = `&displayCat=${this.props.displayCat}`
        this.props.dispatch(removeDrink(drinkId));
        this.props.dispatch(searchDrink(this.props.currentUser.username, displayCatQuery));
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
                    userFavorite = "A Favorite of Yours"
                }
            }
            if (drink.user === this.props.currentUser.username) {
                deleteButton =
                <button className="list-btn" id={drink.id} onClick={(e) => this.handleDelete(e)}>Remove Drink</button>

            }
            if (drink.photo === '' || undefined) {
                drink.photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAunt6FN4pSgVTgZtg7KE616V4QrKhf6sM-LzxSHze-kDIzsaQ";
            }
            return (
                <li key={drink.id} id={drink.id} className="drink-list-item">
                    <img className="result-img" src={drink.photo} alt={drink.name} />
                    <h2>{drink.name}</h2>
                        <em> {userFavorite}</em>
                    <div>
                    <ul className="ingredient-list">
                        <h3 className="ingredient-header">Ingredients</h3>
                        {ingredients}
                    </ul>
                    </div>
                    <ul className="drink-atr">
                        <li><strong>Style: </strong>{drink.method}</li>
                        <li><strong>Has Egg White: </strong>{drink.eggWhite}</li>
                        <li><strong>Glass: </strong>{drink.glass}</li>
                        <li><strong>Instructions: </strong>{drink.instructions}</li>
                    </ul>
                    {deleteButton}
                    <button className="list-btn" id={userFavorite} onClick={e => this.handleFavorite(e)}>Favorite</button>
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
                <ul className="main-results">
                    {drinks}
                </ul>
            </div>
        );
    }

    // search(e) {
    //     e.preventDefault();
    //     if (this.input.value.trim() === '' || this.input.value.trim() === undefined) {
    //         return;
    //     }
    //     this.props.dispatch(setSearchTerm(this.input.value));
    //     this.props.dispatch(searchDrink(this.props.currentUser.username,
    //         `&search=${this.input.value}`, `&displayCat=${this.props.displayCat}`));
    // }

    render() {
        return (
            <div className="drink-search">
                {/* < SearchBar />
                < Dropdown /> */}
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
            currentUser: state.auth.currentUser,
            displayCat: state.drink.displayCat
        });
        
export default connect(mapStateToProps)(DrinkList);