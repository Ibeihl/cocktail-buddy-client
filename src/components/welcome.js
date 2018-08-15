import React from 'react';
import './welcome.css';

export class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <img className="welcome-img" alt="welcome cocktail drawing" src="https://static.vinepair.com/wp-content/uploads/2015/04/retro-cocktail-party-header-top.jpg" />
                <p>Looking for an easy way to organize and store cocktail recipes?</p>
                <p>Register or sign in to get started!</p>
            </div>
        );
    }
}
