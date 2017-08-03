import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Registration from './../authorization/registration'
import Login from './../authorization/login'

import { authTabs, toggleAuthModal } from './../../actions/authTabs'

class TopPanel extends Component {
    componentDidMount() {
        authTabs();
        toggleAuthModal();
    }

    render() {
        return(
            <div className="top-panel">
                <div className="auth__toggle">
                    LOGIN
                </div>
                <div className="auth auth--visible">
                    <ul className="auth__tabs__controls">
                        <li className="auth__tab__control">Login</li>
                        <li className="auth__tab__control auth__tab__control--active">Register</li>
                    </ul>
                    <div className="auth__tabs">
                        <Login />
                        <Registration />
                    </div>
                </div>
                <Link to="/cabinet">User cabinet</Link>
            </div>
        )
    }
}

export default TopPanel;
