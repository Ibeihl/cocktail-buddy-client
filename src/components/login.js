import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty, isTrimmed } from '../validators';
import '../css/login.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        
        return (               
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <fieldset>
                        <legend>Login</legend>
                        {error}
                        <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                        <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                        <button disabled={this.props.pristine || this.props.submitting}>
                            Log in
                </button>
                    </fieldset>
                </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);