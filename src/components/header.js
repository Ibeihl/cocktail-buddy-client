import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <header>
                <h1>Cocktail Buddy</h1>
                <p>An app built by bartenders, for bartenders.</p>
                {/* <p>Looking for the perfect drink for that
                    picky customer? Cocktail Buddy's simple
                    search form allows you to search through
                    hundreds of tried and tested craft cocktail 
                    recipes
                </p> */}
            </header>
        </div>
    );
}