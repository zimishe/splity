import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Registration from './../authorization/registration'
import Login from './../authorization/login'
import UserInfo from './../topPanel/userInfo'
import store from './../../store/store'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { authTabs, toggleAuthModal } from './../../actions/authTabs'


const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};

class TopPanel extends Component {
    componentDidMount() {
        authTabs();
        toggleAuthModal();
    }
    
    checkInfo() {
        let data = store.getState().loggedUserInfo;
        
        if (!Array.isArray(data)) {
            return  <UserInfo name={data.name} />;
        }   
    }

    render() {
        
        return(
            <div className="top-panel">
                <div className="auth__toggle">
                    LOGIN
                </div>
                <div className="auth">
                    <ul className="auth__tabs__controls">
                        <li className="auth__tab__control">Login</li>
                        <li className="auth__tab__control auth__tab__control--active">Register</li>
                    </ul>
                    <div className="auth__tabs">
                        <Login />
                        <Registration />
                    </div>
                </div>
                {this.checkInfo()}
                <Link to="/cabinet" className="personal-cab">User cabinet</Link>
            </div>
        )
    }
}

export default withRouter(connect(
    mapStateToProps
)(TopPanel));

