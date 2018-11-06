import React from 'react';
import { connect } from 'react-redux';
import { searchDrink, setSearchTerm } from '../actions/drink';
import '../css/search-bar.css';

export class SearchBar extends React.Component {
    componentDidMount(){
        let currentUser = this.props.currentUser.username;
        let displayCatQuery = `&displayCat=${this.props.displayCat}`
        this.props.dispatch(searchDrink(currentUser, displayCatQuery))
    }

    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '' || this.input.value.trim() === undefined) {
            return;
        }
        this.props.dispatch(setSearchTerm(this.input.value));
        this.props.dispatch(searchDrink(this.props.currentUser.username,
            `&search=${this.input.value}`, `&displayCat=${this.props.displayCat}`));
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={(e) => this.search(e)}>
                    <input className="search-input" type="search"
                        ref={input => this.input = input} 
                        placeholder="keyword"/>
                    <button className="search-button">Search</button>
                </form>
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
        
export default connect(mapStateToProps)(SearchBar);