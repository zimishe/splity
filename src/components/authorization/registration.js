/**
 * Created by eugene on 03.08.2017.
 */

import React, { Component } from 'react'

import { registrationSuccess } from './../../actions/authorization/registrationSuccess'
import { registerUser } from './../../actions/authorization/registerUser'

class Registration extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            errors: [],
            success: false
        }
    }
    
    registrationSuccess() {
        registrationSuccess();
    }
    
    checkError(name) {
        let errors = this.state.errors;
        
        if (errors.length > 0) {
            let errField = errors.filter(error => error.field === name);

            if (errField !== undefined && errField.length !== 0) {
                return errField[0].text
            }
        }
    }
    
    registerUser(e) {
        e.preventDefault();
        
        let that = this;

        registerUser(e, that)
    }
    
    render() {
        return (
            <form className="auth__tab auth__tab__registration auth__tab--visible"
                  onSubmit={this.registerUser.bind(this)}
            >
                <div className="auth__tab__success">
                    <h4>Congrats, you have successfully registered!</h4>
                    <h4>Now you can log in</h4>
                </div>
                <h3>Register</h3>
                <div className="auth__tab__input"
                     data-error={this.checkError('user_name')}>
                    <input type="text"
                           name="user_name"
                           placeholder="Your name"
                           required
                    />    
                </div>
                <div className="auth__tab__input"
                     data-error={this.checkError('user_email')}>
                    
                    <input type="email"
                           name="user_email"
                           placeholder="Your email"
                           required
                    />    
                </div>
                <div className="auth__tab__input">
                    <input type="password"
                           name="user_password"
                           placeholder="Create some password"
                           required
                    />    
                </div>
                <div className="auth__tab__input"
                     data-error={this.checkError('user_confirm_password')}>
                    <input type="password"
                           name="user_confirm_password"
                           placeholder="Repeat password"
                           required
                    />    
                </div>
                
                <button className="auth__tab__submit auth__tab__submit--register">Register</button>
            </form>
        )
    }
}

export default Registration
