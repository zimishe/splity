import React, { Component } from 'react'
import store from './../../store/store'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import request from 'request'
import BASE_URL from './../../actions/getHost'

import DonateForm from './../forms/donate'
import RecentActivities from './../recentActivities/recentActivities'
import UsersBalance from './../usersBalance/usersBalance'
import AddUserForm from './../forms/addUser'

import { getShortDate } from './../../actions/formatDate'
import { countTotalAmount } from './../../actions/countUserBalance'
import { addDonation } from './../../actions/addDonation'
import { updateEventData } from './../../actions/updateEventData'

const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        eventDonate: function (eventID, e) {
            e.preventDefault();
            
            let dataToSend,
                eventDataToSend,
                donations = store.getState().donations,
                donationsToSet,
                events = [...store.getState().events],
                eventsToSet,
                // eslint-disable-next-line
                eventDonations = [...donations].filter(el => el._id === eventID),
                eventUsers = [...events].filter(el => el._id === eventID)[0].eventUsers;
            
            dataToSend = {
                userID : JSON.parse(sessionStorage.getItem('loggedUserInfo'))._id,
                eventID : eventID,
                amount : parseInt(e.target.childNodes[1].value, 10),
                description : e.target.childNodes[0].value,
                donationDate: new Date()
            };
            
            donationsToSet = [...donations, dataToSend];

            function setStorageTotalAmount() {
                return new Promise((resolve) => {
                    store.dispatch(addDonation(donationsToSet));
                    
                    request({
                        uri: BASE_URL+'donate',
                        method: "post",
                        form: dataToSend
                    }, function(error, response, body) {
                        // console.log('body', JSON.parse(body));
                    });
                    resolve();
                })
            }

            setStorageTotalAmount().then(() => {
                store.dispatch(updateEventData(eventDataToSend));
                
                localStorage.setItem('donations', JSON.stringify(store.getState().donations));
            }).then(() => {
                localStorage.setItem('events', JSON.stringify(store.getState().events));
            });
            
            let eventsFiltered = [...events.filter(el => el._id === eventID)][0];

            eventsToSet = {
                _id: eventID,
                eventDate: eventsFiltered.eventDate,
                eventDescription : eventsFiltered.eventDescription,
                eventUsers: [...eventUsers],
                totalAmount: countTotalAmount([...store.getState().donations].filter(el => el.eventID === eventID))
            };

            eventDataToSend = [...events.filter(el => el._id !== eventID), eventsToSet];
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