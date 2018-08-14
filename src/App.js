import React from 'react';
import './App.css';
import Header from './components/header';
import { Welcome } from './components/welcome';
import Footer from './components/footer';
import Main  from './components/main';
import RegistrationPage from './components/registration-page';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import {refreshAuthToken} from './actions/auth';
import {connect} from 'react-redux';
import {storeAuthInfo} from './actions/auth';
import {loadAuthToken} from './local-storage';

export class App extends React.Component {
  componentDidMount(){
    const authToken = loadAuthToken();
    if (authToken) {
        const token = authToken;
        storeAuthInfo(token, this.props.dispatch);
        // refreshAuthToken();
    }
  }
  
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
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
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});


export default withRouter(connect(mapStateToProps)(App));