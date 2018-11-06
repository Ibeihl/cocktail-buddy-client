import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Welcome} from './welcome';
import LoginForm from './login';
import '../css/login.css'

export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <div className="login-page">
            <Welcome/>
            <Link className="log-reg-link" to="/register">Don't have an Account? Create One!</Link>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
