/**
 * Created by eugene on 03.08.2017.
 */

import React, { Component } from 'react'
import BASE_URL from './../../actions/getHost'
import request from 'request'
import FormData from 'form-data'

class Registration extends Component {
    registerUser(e) {
        e.preventDefault();

        let dataToSend = {};

        request({
            uri: BASE_URL+'register',
            method: "post",
            formData: dataToSend
        }, function(error, response, body) {
            console.log('resp', response);
            console.log('body', body);
        });
    }



    render() {
        return (
            <form className="auth__tab auth__tab__registration auth__tab--visible"
                  onSubmit={this.registerUser}
            >
                <h3>Register</h3>
                <input type="text"
                       name="user_name"
                       placeholder="Your name"
                       required
                />
                <input type="email"
                       name="user_email"
                       placeholder="Your email"
                       required
                />
                <input type="password"
                       name="user_password"
                       placeholder="Create some password"
                       required
                />
                <input type="password"
                       name="user_confirm_password"
                       placeholder="Repeat password"
                       required
                />
                <button>Register</button>
            </form>
        )
    }
}

export default Registration
