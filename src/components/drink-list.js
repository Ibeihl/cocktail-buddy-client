import React from 'react';
import {connect}  from 'react-redux';
import {searchDrink} from '../actions/drink';
import './drink-list.css';

export class DrinkList extends React.Component {
    renderResults() {
        if(this.props.loading) {
            return <strong>loading....</strong>;
        }
        if(this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const drinks = this.props.drinks.map((drink, index) => 
            <li key={index}>{drink}</li>
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
        return (
            <div className="drink-search">
                <form onSubmit={(e) => this.search(e)}>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                </form>
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