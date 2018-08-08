import React from 'react';
import './App.css';
import Header from './components/header';
import DrinkList from './components/drink-list';
import Welcome from './components/welcome';
import Footer from './components/footer';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        < Header />
        < Welcome />
        < DrinkList />
        < Footer />
      </div>
    );
  }
}

