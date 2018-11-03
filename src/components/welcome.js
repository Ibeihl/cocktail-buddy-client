import React from 'react';
import '../css/welcome.css';

export class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                {/* <img className="welcome-img" alt="welcome cocktail drawing" src="https://static.vinepair.com/wp-content/uploads/2015/04/retro-cocktail-party-header-top.jpg" /> */}
                <h1>The Cocktail Library</h1>
                <p>Looking for an easy way to organize and store cocktail recipes?</p>
                {/* <p>How does Cocktail Buddy work?</p> */}
                <p>We give you our favorite classic recipes to start with, then you can create your own recipes,
                    pick favorites, and search through them easily!</p>
                <p>Register or sign in to get started!</p>
            </div>
        );
    }
}
