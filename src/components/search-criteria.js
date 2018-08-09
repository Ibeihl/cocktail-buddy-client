import React from 'react';
import { connect } from 'react-redux';
import { checkShakenBox, checkStirredBox } from '../actions/search-criteria'
import './search-criteria.css';

export class SearchCriteria extends React.Component {
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.shaken.checked);
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
            console.log(filter["checkboxs"])
            const checkboxElements = filter["checkboxs"].map(item =>
                <span key={item.id}>
                    <input type="checkbox" id={item.displayName} name={item.displayName}
                        value={item.displayName}
                        onClick={() => console.log(`${item.displayName}checked!`)}
                        ref={input => this[`${item.id}`] = input} />
                    <label htmlFor={item.displayName}>{item.displayName}</label>
                </span>
            )
            return (
                <fieldset key={filter.legend}>
                    <legend>{filter.legend}</legend>
                    {checkboxElements}
                </fieldset>
            )
        })

        return (
            <div className="search-criteria">
                <form>
                    {/* {searchForm} */}
                    {filterElements}
                    <button className="criteria-search-btn" type="submit" onClick={(e) => this.handleSubmit(e)}>Search!</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchMethod: state.searchMethod

});

export default connect(mapStateToProps)(SearchCriteria);