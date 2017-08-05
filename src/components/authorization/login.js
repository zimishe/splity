/**
 * Created by eugene on 03.08.2017.
 */

import React, { Component } from 'react'
import { loginUser } from './../../actions/authorization/loginUser'
import { loginSuccess } from './../../actions/authorization/loginSuccess'

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            errors: []
        }
    }
    
    loginUser(e) {
        e.preventDefault();
        
        let that = this;
        
        loginUser(e, that);
    }
    
    loginSuccess() {
        loginSuccess();
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
    
    render() {
        return(
            <form className="auth__tab auth__tab__login"
                  onSubmit={this.loginUser.bind(this)}
            >
                <h3>Log in</h3>
                <div className="auth__tab__input"
                     data-error={this.checkError('user_email')}>
                    <input type="email"
                           name="user_email"
                           placeholder="Your email"
                           required
                    />
                </div>
                <div className="auth__tab__input"
                     data-error={this.checkError('user_password')}>
                    <input type="password"
                           name="user_password"
                           placeholder="Your password"
                           required
                    />
                </div>
                <button className="auth__tab__submit auth__tab__submit--login">Log in</button>
            </form>
        )
    }
}

export default Login