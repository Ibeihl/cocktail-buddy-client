import React from 'react';
import { connect } from 'react-redux';
import {searchDrink} from '../actions/drink';
import './search-criteria.css';

export class SearchCriteria extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            methodQuery: '',
            eggWhiteQuery: '',
            ingredientsQuery: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.shaken.checked);
    }

    // ajaxCaller() {
    //     let methodQuery = '';
    //     let eggWhiteQuery = '';
    //     let ingredientsQuery = '';
    //     if(this.props.searchMethod !== null){
    //         methodQuery = `&method=${this.props.searchMethod}`;
    //     }
    //     if(this.props.eggWhite !== null) {
    //         eggWhiteQuery = `&eggWhite=${this.props.eggWhite}`;
    //     }
    //     if(this.props.searchIngredients !== []) {
    //         ingredientsQuery = `&ingredients=${this.props.ingredientsQuery}`
    //     }
    //     this.props.dispatch(searchDrink(this.props.searchTerm, methodQuery, eggWhiteQuery, ingredientsQuery))
    // }

    //I think i need to store things then use a lifecycle methosd because,
    //theres no way to presist the data, everytime the checkhandler function
    //is called, it resets the query strings, so it is only making the ajax call
    //with one query with the checkbox that was clicked....

    //seems like should store the data in state so the we can continuously add to 
    //to the query when clicking multiple boxes as well as still including the searchterm
    //from the other component.  maybe update the store with the actions, then run componentdidupdate
    //to make sure the state is up to date, then fire off the ajax request with the up to date
    //store criteria????????

    checkHandler(event) {
        let methodQuery = '';
        let eggWhiteQuery = '';
        let ingredientsQuery = '';
        let value = event.target.value;
        if(value === "Yes" || value === "No"){
            value = value.toLowerCase();
            eggWhiteQuery = `&eggWhite=${value}`;
            this.setState({
                eggWhiteQuery: [...this.state.eggWhiteQuery, eggWhiteQuery].join('')
            }, this.props.dispatch(searchDrink(this.props.searchTerm, this.state.methodQuery,
                this.state.eggWhiteQuery, this.state.ingredientsQuery))
            );
            
            // this.props.dispatch(checkedEggWhiteBox(value));
        }
        else if(value === "Shaken" || value === "Stirred") {
            value = value.toLowerCase();
            methodQuery = `&method=${value}`;
            this.setState({
                methodQuery: [...this.state.methodQuery, methodQuery].join('')
            }, this.props.dispatch(searchDrink(this.props.searchTerm, this.state.methodQuery,
                this.state.eggWhiteQuery, this.state.ingredientsQuery))
            );
            // this.props.dispatch(checkedMethodBox(value));
        } else {
            ingredientsQuery = `&ingredients=${value}`;
            this.setState({
                ingredientsQuery: [...this.state.ingredientsQuery, ingredientsQuery].join('')
            }, this.props.dispatch(searchDrink(this.props.searchTerm, this.state.methodQuery,
                this.state.eggWhiteQuery, this.state.ingredientsQuery))
            );
            // this.props.dispatch(checkedIngredientBox(value));
        }
        // this.ajaxCaller();
        console.log(this.state);
        this.props.dispatch(searchDrink(this.props.searchTerm, this.state.methodQuery,
             this.state.eggWhiteQuery, this.state.ingredientsQuery))
    }

    render() {
        const filters = [
            { legend: "Shaken or Stirred", checkboxs:[
                { displayName: "Shaken", id: "shaken" },
                 { displayName: "Stirred", id: "stirred" }] },
                 { legend: "Egg White", checkboxs:[
                    { displayName: "Yes", id: "yesEggWhite" },
                     { displayName: "No", id: "noEggWhite" }] },
                     { legend: "Spirit", checkboxs:[
                        { displayName: "Whiskey", id: "whiskey" },
                         { displayName: "Tequila", id: "tequila" },
                         { displayName: "Rum", id: "rum" },
                         { displayName: "Gin", id: "gin" },
                         { displayName: "Vodka", id: "vodka" },
                         { displayName: "Brandy", id: "brandy" }] },
                         { legend: "Juice", checkboxs:[
                            { displayName: "Lemon", id: "lemon" },
                             { displayName: "Lime", id: "lime" },
                             { displayName: "Grapefruit", id: "grapefruit" },
                             { displayName: "Orange", id: "orange" },
                             { displayName: "Pineapple", id: "pineapple" },
                             { displayName: "Cranberry", id: "cranberry" }] },
                             { legend: "Syrup", checkboxs:[
                                { displayName: "Simple", id: "simple" },
                                 { displayName: "Honey", id: "honey" },
                                 { displayName: "Ginger", id: "ginger" },
                                 { displayName: "Cinnamon", id: "cinnamon" },
                                 { displayName: "Curacao", id: "curacao" },
                                 { displayName: "Maple", id: "maple" }] }
                ]

        const filterElements = filters.map(filter => {
            const checkboxElements = filter["checkboxs"].map(item =>
                <span key={item.id}>
                    <input type="checkbox" id={item.id} name={item.displayName}
                        value={item.displayName}
                        onClick={(e) => this.checkHandler(e)}
                        ref={input => this[`${item.id}`] = input} />
                    <label htmlFor={item.displayName}>{item.displayName}</label>
                </span>
            )
            return (
                <div key={filter.legend}>
                    <legend>{filter.legend}</legend>
                    {checkboxElements}
                </div>
            )
        })

        return (
            <div className="search-criteria">
                <form>
                    <fieldset>
                        <legend>Advanced Search</legend>
                    {filterElements}
                    <button className="criteria-search-btn" type="submit" onClick={(e) => this.handleSubmit(e)}>Search!</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchTerm: state.drink.searchTerm,
    searchMethod: state.drink.searchMethod,
    searchIngredients: state.drink.searchIngredients,
    eggWhite: state.drink.eggWhite
});

export default connect(mapStateToProps)(SearchCriteria);