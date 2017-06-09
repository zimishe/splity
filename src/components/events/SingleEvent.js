import React, { Component } from 'react'
import store from './../../store/store'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import DonateForm from './../forms/donate'
import RecentActivities from './../recentActivities/recentActivities'
import UsersBalance from './../usersBalance/usersBalance'

import { getShortDate } from './../../actions/formatDate'
import { countTotalAmount } from './../../actions/countUserBalance'
import { addDonation } from './../../actions/addDonation'
import { setEventTotalAmount } from './../../actions/setEventTotalAmount'

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
                eventDonations = [...donations].filter(el => el.eventID === eventID),
                eventTemp = eventDonations.map(el => el.userID),
                eventUsers = eventTemp.filter((el, index) => eventTemp.indexOf(el) === index);
            
            dataToSend = {
                userID : 3,
                eventID : eventID,
                amount : parseInt(e.target.childNodes[1].value, 10),
                description : e.target.childNodes[0].value,
                donationDate: new Date()
            };
            
            donationsToSet = [...donations, dataToSend];

            function setStorageTotalAmount() {
                return new Promise((resolve) => {
                    store.dispatch(addDonation(donationsToSet));
                    resolve();
                })
            }

            setStorageTotalAmount().then(() => {
                store.dispatch(setEventTotalAmount(eventDataToSend));
                localStorage.setItem('donations', JSON.stringify(store.getState().donations));
            }).then(() => {
                localStorage.setItem('events', JSON.stringify(store.getState().events));
            });
            
            let eventsFiltered = [...events.filter(el => el.eventID === eventID)][0];

            eventsToSet = {
                eventID: eventID,
                eventDate: eventsFiltered.eventDate,
                eventDescription : eventsFiltered.eventDescription,
                eventUsers: [...eventUsers],
                totalAmount: countTotalAmount([...store.getState().donations].filter(el => el.eventID === eventID))
            };

            eventDataToSend = [...events.filter(el => el.eventID !== eventID), eventsToSet];

            // fetch('/', {
            //     method: 'POST',
            //     body: data
            // }).then(function (response) {
            //    
            // });
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
        let eventID = parseInt(this.props.match.params.number, 10),
            users = [...this.props.data.users],
            eventInfo = [...this.props.data.events].filter(el => el.eventID === eventID)[0],
            eventDonations = [...this.props.data.donations].filter(el => el.eventID === eventID),
            eventTemp = eventDonations.map(el => el.userID),
            eventUsers = eventTemp.filter((el, index) => eventTemp.indexOf(el) === index);
            
            console.log('eventusers', eventUsers);
        
        return (
            <div className="event-detailed">
                <div className="event-detailed__title">
                    <p><strong>{eventInfo.eventDescription},</strong> {getShortDate(eventInfo.eventDate)}</p>
                </div>
                <DonateForm onSubmit={this.props.eventDonate.bind(this, eventID)} />
                
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