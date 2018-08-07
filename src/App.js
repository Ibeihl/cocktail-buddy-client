import React from 'react';
import './App.css';
import Header from './components/header';
import DrinkList from './components/drink-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        < Header />
        < DrinkList />
      </div>
    );
  }
}

