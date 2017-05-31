import React, { Component } from 'react'
import store from './../store/store'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import DonateForm from './forms/donate'
import SingleActivity from './support/singleActivity'
import UserBalance from './userBalance'

import { getShortDate } from './../actions/formatDate'
import { countUserBalance } from './../actions/countUserBalance'

const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        eventDonate: function (eventID, e) {
            e.preventDefault();
            
            
            let dataToSend = {};
            
            dataToSend.userID = 3;
            dataToSend.eventID = eventID;
            dataToSend.amount = parseInt(e.target.childNodes[1].value, 10);
            dataToSend.description = e.target.childNodes[0].value;
            dataToSend.date = new Date();
            
            console.log('dts', dataToSend);
            

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
        
        console.log('users', users);
        console.log('eventUsers', eventUsers);
        
        return (
            <div className="event-detailed">
                <div className="event-detailed__title">
                    <p><strong>{eventInfo.eventDescription},</strong> {getShortDate(eventInfo.eventDate)}</p>
                </div>
                <DonateForm onSubmit={this.props.eventDonate.bind(this, eventID)} />
                <div className="recent-activities">
                    <h3>Recent Activities</h3>
                    <div className="recent-activities__list">
                        {eventDonations.map((el, i) => 
                            <SingleActivity key={i}
                                            data={el}
                                            userName={users.filter(user => user.id === el.userID)[0].name}
                            /> 
                        )}
                        
                    </div>
                </div>
                <div className="users-balance">
                    <h3>Users balance</h3>
                    <div className="users-balance__caption">
                        <h5>User</h5>
                        <h5>Balance</h5>
                    </div>
                    <div className="users-balance__list">
                        {eventUsers.map((el, i) => 
                            <UserBalance key={i}
                                         userBalance={countUserBalance(el, eventUsers.length, eventInfo.totalAmount, eventDonations)}
                                         userName={users.filter(user => user.id === el)[0].name}
                            />
                        )}
                    </div>
                    <div className="users-balance__total">
                        <p>Total: <strong>{eventInfo.totalAmount}</strong> грн</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleEvent));