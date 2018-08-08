import React from 'react';
import { connect } from 'react-redux';
import { searchDrink } from '../actions/drink';
import './drink-list.css';
import AdvancedSearch from './advanced-search';

export class DrinkList extends React.Component {

    renderResults() {
        if (this.props.loading) {
            return <strong>loading....</strong>;
        }
        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }
        const drinks = this.props.drinks.map((drink, index) => {
            const ingredients = drink.ingredients.map((ingredient, index) =>
                <li key={index}>
                    {ingredient}
                </li>
            );
            return (
                <li key={index} className="drink-list-item">
                    <img src={drink.photo} alt={drink.name} />
                    <h2>{drink.name}</h2>
                    <ul>
                        <h3>Ingredients</h3>
                        {ingredients}
                    </ul>
                    <ul>
                        <li>Style: {drink.method}</li>
                        <li>Has Egg White: {drink.eggWhite}</li>
                        <li>Glass: {drink.glass}</li>
                        <li>Instructions: {drink.instructions}</li>
                    </ul>
                </li>
            )
        }
        );

        return (
            <ul className="drink-results">
                {drinks}
            </ul>
        );
    }

    // componentDidMount() {
    //     this.props.dispatch(fetchDrink());
    // }

    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
        this.props.dispatch(searchDrink(this.input.value))
    }

    render() {
        console.log(this.props.drinks);
        return (
            <div className="drink-search">
                <form onSubmit={(e) => this.search(e)}>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                </form>
                <AdvancedSearch />
                <ul className="drink-results">
                    {this.renderResults()}
                </ul>
            </div>
                );
            }

        };


const mapStateToProps = state => ({
                    loading: state.loading,
            error: state.error,
            drinks: state.drinks,
        });
        
export default connect(mapStateToProps)(DrinkList);