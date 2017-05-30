import React, { Component } from 'react'
import store from './../store/store'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import DonateForm from './forms/donate'

import { getShortDate } from './../actions/formatDate'

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
            eventDonations = [...this.props.data.donations].filter(el => el.eventID === eventID);
        
        console.log('donations', eventDonations);
        console.log('date', eventInfo.eventDate);
        
        return (
            <div className="event-detailed">
                <div className="event-detailed__title">
                    <p><strong>{eventInfo.eventDescription},</strong> {getShortDate(eventInfo.eventDate)}</p>
                </div>
                <DonateForm onSubmit={this.props.eventDonate.bind(this, eventID)} />
            </div>
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleEvent));