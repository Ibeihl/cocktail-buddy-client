import React from 'react';
import '../css/user-greeting.css';

export default function UserGreeting(props) {
    return (
        <div className="user-greeting">
                <h1>Cocktail Buddy</h1>
                <p>An app built by bartenders, for bartenders.</p>
                <p>To get started, either browse our current drinks,
                    search for drinks by ingredients or name, or add
                    your own creation, so you can access it anytime!
                </p>
        </div>
    );
}