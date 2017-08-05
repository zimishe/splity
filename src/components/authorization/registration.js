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
            errors: [],
            success: false
        }
    }
    
    registrationSuccess() {
        let form = document.querySelector('.auth__tab__registration'),
            success = document.querySelector('.auth__tab.auth__tab--visible .auth__tab__success'),
            controls = Array.from(document.querySelectorAll('.auth__tab__control')),
            tabs = Array.from(document.querySelectorAll('.auth__tab'));

        success.classList.add('auth__tab__success--visible');
        form.reset();
        
        setTimeout(() => {
            success.classList.remove('auth__tab__success--visible');    
            controls.forEach(control => control.classList.toggle('auth__tab__control--active'));
            tabs.forEach(control => control.classList.toggle('auth__tab--visible'));
        }, 2500)
    }
    
    checkError(name) {
        let errors = this.state.errors;
        
        if (errors.length > 0) {
            let errField = errors.filter(error => error.field === name);

            if (errField !== undefined && errField.length !== 0) {
                // let input = document.querySelector('input[name='+name+']');
                
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
            
            if (JSON.parse(body).status !== 1) {
                that.setState(() => {
                    return {errors: JSON.parse(body).errors}
                })    
            }   else {
                that.setState(() => {
                    return {success: true}
                });
                
                sessionStorage.setItem('loggedUserID', JSON.parse(body).userID);
                
                that.registrationSuccess();
            }
        });
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
