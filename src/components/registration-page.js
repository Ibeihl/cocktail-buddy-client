import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Welcome} from './welcome';
import RegistrationForm from './register';
import Frame from '../images/gold-frame.png';
import '../css/register.css'

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    let loading;
    if (props.loading) {
        loading = <h3>Logging in...</h3>
    }
    const style = {
        borderImage: 'url('+ Frame +') 93 92 87 92 stretch stretch'
    }
    return (
        <div style={style} className="registration-page">
            <Welcome/>
            <Link className="log-reg-link" to="/login">Already have an Account? Login here!</Link>
            <RegistrationForm />
            {loading}
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading
});

export default connect(mapStateToProps)(RegistrationPage);
