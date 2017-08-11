/**
 * Created by eugene on 06.08.2017.
 */

import request from 'request'
import BASE_URL from './../../actions/getHost'

import { createNewStore } from './../../store/store'
import { countTotalAmount } from './countUserBalance'
import { addDonation } from '../../actions/actionCreators/addDonation'
import { updateEventData } from '../../actions/actionCreators/updateEventData'

export function eventDonate(eventID, e) {
    e.preventDefault();

    let dataToSend,
        eventDataToSend,
        donations = createNewStore().getState().donations,
        donationsToSet,
        events = [...createNewStore().getState().events],
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
            createNewStore().dispatch(addDonation(donationsToSet));

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
        createNewStore().dispatch(updateEventData(eventDataToSend));
        
        let dataToUpdate = {
            eventID: eventID,
            totalAmount: countTotalAmount([...createNewStore().getState().donations].filter(el => el.eventID === eventID))
        };

        request({
            uri: BASE_URL+'updateEvent',
            method: "put",
            form: dataToUpdate
        }, function(error, response, body) {
            // console.log('body', JSON.parse(body));
        });
        
        localStorage.setItem('donations', JSON.stringify(createNewStore().getState().donations));
    }).then(() => {
        localStorage.setItem('events', JSON.stringify(createNewStore().getState().events));
    });

    let eventsFiltered = [...events.filter(el => el._id === eventID)][0];

    eventsToSet = {
        _id: eventID,
        eventDate: eventsFiltered.eventDate,
        eventDescription : eventsFiltered.eventDescription,
        eventUsers: [...eventUsers],
        totalAmount: countTotalAmount([...createNewStore().getState().donations].filter(el => el.eventID === eventID))
    };
    
    eventDataToSend = [...events.filter(el => el._id !== eventID), eventsToSet];
}

