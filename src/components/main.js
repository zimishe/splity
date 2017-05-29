/**
 * Created by eugene on 05/29/17.
 */

import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store from './../store/store'

import SingleEvent from './SingleEvent'
import UserCabinet from './userCabinet'


const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        editTooltipTextHandler: function () {
            console.log('here');
        }
    }
};

const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};

class Main extends Component {
    render() {
        return (
            <div className="some-main-content">
                <Link to="/event/3">3 event</Link>
                <h2>some main content</h2>
                <Switch>
                    <Route path='/event/:number' component={SingleEvent}/>
                    <Route path='/cabinet' component={UserCabinet}/>
                </Switch>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
