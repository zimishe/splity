/**
 * Created by eugene on 03.08.2017.
 */

import React, { Component } from 'react'
import BASE_URL from './../../actions/getHost'
import request from 'request'

class Registration extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            errors: []
        }
    }
    
    checkError(name) {
        let errors = this.state.errors;
        
        if (errors.length > 0) {
            let errField = errors.filter(error => error.field === name);

            if (errField !== undefined && errField.length !== 0) {
                let input = document.querySelector('input[name='+name+']');
                
                // input.classList.add('invalid');
                
                return errField[0].text
            }
        }
    }
    
    registerUser(e) {
        e.preventDefault();
        
        let dataToSend = {},
            that = this;
        
        let form = e.target,
            inputs = Array.from(form.getElementsByTagName('input'));
        
        inputs.forEach(el => {
            dataToSend[el.name] = el.value;
        });

        request({
            uri: BASE_URL+'register',
            method: "post",
            form: dataToSend
        }, function(error, response, body) {
            that.setState(() => {
                return {errors: JSON.parse(body).errors}
            })
        });
    }
    
    render() {
        return (
            <form className="auth__tab auth__tab__registration auth__tab--visible"
                  onSubmit={this.registerUser.bind(this)}
            >
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
