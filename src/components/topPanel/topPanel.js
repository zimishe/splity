import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Registration from './../authorization/registration'
import Login from './../authorization/login'
import UserInfo from './../topPanel/userInfo'
import { createNewStore } from './../../store/store'


import { setLoggedUserInfo } from './../../actions/actionCreators/setLoggedUserInfo'
import { checkLogged } from './../../actions/authorization/checkLogged'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { authTabs, toggleAuthModal } from '../../actions/authorization/authTabs'

const mapStateToProps = function () {
    return {
        data : createNewStore().getState()
    }
};

class TopPanel extends Component {
    componentDidMount() {
        authTabs();
        toggleAuthModal();
    }
    
    logout() {
        createNewStore().dispatch(setLoggedUserInfo([]));
        sessionStorage.removeItem('loggedUserInfo');
    }
    
    checkInfo() {
        let data = createNewStore().getState().loggedUserInfo,
            sessionData = sessionStorage.getItem('loggedUserInfo');
        
        if (sessionData !== null) {
            return  <UserInfo name={JSON.parse(sessionData).name}
                              logout={this.logout}
                    />;
        }   else if (!Array.isArray(data)) {
            return  <UserInfo name={data.name}
                              logout={this.logout}
            />;
        }   
    }

    render() {
        return(
            <div className="top-panel">
                <div className="auth__toggle">
                    LOGIN / REGISTER
                </div>
                <div className="auth">
                    <ul className="auth__tabs__controls">
                        {!checkLogged() && <li className="auth__tab__control">Login</li>}
                        <li className="auth__tab__control auth__tab__control--active">Register</li>
                    </ul>
                    <div className="auth__tabs">
                        { !checkLogged() && <Login />}
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

