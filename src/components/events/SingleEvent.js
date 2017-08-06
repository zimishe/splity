import React, { Component } from 'react'
import store from './../../store/store'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import DonateForm from './../forms/donate'
import RecentActivities from './../recentActivities/recentActivities'
import UsersBalance from './../usersBalance/usersBalance'
import AddUserForm from './../forms/addUser'

import { getShortDate } from '../../actions/formatDate/formatDate'
import { eventDonate } from './../../actions/eventActions/eventDonate'

const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        eventDonate: function (eventID, e) {
            eventDonate(eventID, e);
        }
    }
};

const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};


class SingleEvent extends Component {
    render() {
        let eventID = this.props.match.params.number,
            users = [...this.props.data.users],
            events = [...store.getState().events],
            eventInfo = [...this.props.data.events].filter(el => el._id === eventID)[0],
            eventDonations = [...this.props.data.donations].filter(el => el.eventID === eventID),
            eventUsers = [...events].filter(el => el._id === eventID)[0].eventUsers;
        
        return (
            <div className="event-detailed">
                <div className="event-detailed__title">
                    <p>
                        <strong>
                            {(eventInfo.eventDescription !== '') ? eventInfo.eventDescription : 'без опису :('},
                        </strong>
                        {getShortDate(eventInfo.eventDate)}</p>
                </div>
                <DonateForm onSubmit={this.props.eventDonate.bind(this, eventID)} />
                <AddUserForm users={users}
                             eventID={eventID}
                />
                
                <RecentActivities eventDonations = {eventDonations}
                                  users = {users} />
                
                <UsersBalance eventUsers = {eventUsers}
                              eventDonations = {eventDonations}
                              users = {users} />
            </div>
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleEvent));