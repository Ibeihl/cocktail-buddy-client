import React from 'react';
import './App.css';
import Header from './components/header';
import {Welcome} from './components/welcome';
import Footer from './components/footer';
import {Main} from './components/main';
import RegistrationPage from './components/registration-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App(props) {
    return (
      <Router>
        <div className="App">
          < Header />
          <main>
            <Route path='/' component={Welcome} />
            <Route path='/login' component={RegistrationPage} />
            <Route exact path='/main' component={Main} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }


