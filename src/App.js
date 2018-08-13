import React from 'react';
import './App.css';
import Header from './components/header';
import DrinkList from './components/drink-list';
import Welcome from './components/welcome';
import Footer from './components/footer';
import AddDrink from './components/add-drink';
import DrinkForm from './components/drink-form';
import RegistrationPage from './components/registration-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App(props) {
    return (
      <Router>
        <div className="App">
          < Header />
          <main>
            <Route path='/' component={Welcome} />
            <Route path='/' component={DrinkList} />
            <Route pathe='/login' component={RegistrationPage} />
            <Route exact path='/addDrink' component={AddDrink} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }


