/**
 * Created by eugene on 06.08.2017.
 */

import request from 'request'
import BASE_URL from './../../actions/getHost'

import store from './../../store/store'
import { countTotalAmount } from './countUserBalance'
import { addDonation } from '../../actions/actionCreators/addDonation'
import { updateEventData } from '../../actions/actionCreators/updateEventData'

export function eventDonate(eventID, e) {
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
        let updatedData = {
            eventID: eventID,
            totalAmount: eventsToSet.totalAmount
        };

        store.dispatch(updateEventData(eventDataToSend));

        request({
            uri: BASE_URL+'updateEvent',
            method: "put",
            form: updatedData
        }, function(error, response, body) {
            // console.log('body', JSON.parse(body));
        });

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

