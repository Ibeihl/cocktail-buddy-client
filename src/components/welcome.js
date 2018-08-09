import React from 'react';
import './welcome.css';

export default function Welcome(props) {
    return (
        <div className="welcome">
            <img className="welcome-img" alt="welcome cocktail drawing" src="https://static.vinepair.com/wp-content/uploads/2015/04/retro-cocktail-party-header-top.jpg" />
            <p>Looking for the perfect drink for that picky customer?</p>
            <p>We've got your back!</p>
        </div>
    );
}