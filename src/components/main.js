/**
 * Created by eugene on 05/29/17.
 */

import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import SingleEvent from './SingleEvent'
import UserCabinet from './userCabinet'

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

export default Main
