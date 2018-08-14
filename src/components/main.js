import React from 'react';
import DrinkList from './drink-list';
import AddDrink from './add-drink';
import AddDrinkBtn from './add-drink-btn';

export class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <AddDrinkBtn />
                <AddDrink />
                <DrinkList />
            </div>

        )
    }
}