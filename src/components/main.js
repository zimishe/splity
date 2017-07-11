/**
 * Created by eugene on 05/29/17.
 */

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SingleEvent from './events/SingleEvent'
import UserCabinet from './userCabinet/userCabinet'
import EventsList from './events/EventsList'

class Main extends Component {
    render() {
        return (
            <div className="events">
                <Switch>
                    <Route exact path='/' component={EventsList} />
                    <Route path='/event/:number' component={SingleEvent} />
                    <Route path='/cabinet' component={UserCabinet}/>
                </Switch>
            </div>
        )
    }
}

export default Main
