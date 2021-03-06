import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import '../css/register.css';

const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');


export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className="register-form">
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <fieldset>
                        <legend>Register</legend>
                        <div className="label-input">
                            <label htmlFor="firstName">First name</label>
                            <Field component={Input} name="firstName" />
                        </div>
                        <div className="label-input">
                            <label htmlFor="lastName">Last name</label>
                            <Field component={Input} type="text" name="lastName" />
                        </div>
                        <div className="label-input">
                            <label htmlFor="username">Username</label>
                            <Field
                                component={Input}
                                type="text"
                                name="username"
                                validate={[required, nonEmpty, isTrimmed]}
                            />
                        </div>
                        <div className="label-input">
                            <label htmlFor="password">Password</label>
                            <Field
                                component={Input}
                                type="password"
                                name="password"
                                validate={[required, passwordLength, isTrimmed]}
                            />
                        </div>
                        <div className="label-input">
                            <label htmlFor="passwordConfirm">Confirm password</label>
                            <Field
                                component={Input}
                                type="password"
                                name="passwordConfirm"
                                validate={[required, nonEmpty, matchesPassword]}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
                            Register
                </button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
