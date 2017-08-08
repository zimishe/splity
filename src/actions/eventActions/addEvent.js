/**
 * Created by eugene on 06/13/17.
 */

import store from '../../store/store'
import request from 'request'

import BASE_URL from '../getHost'
import { addEvent } from '../actionCreators/addEvent'

export function addEventData(e, date, description) {
    e.preventDefault();

    let pickedUsers = [...store.getState().pickedUsers],
        events = store.getState().events,
        dropdown = document.querySelector('.dropdown__values');
    
    let dataToAdd = {
        eventDate: date,
        eventDescription: description,
        eventUsers: pickedUsers,
        totalAmount: 0
    };
    
    if (pickedUsers.length < 1) {
        if (dropdown !== null) {
            dropdown.classList.add('dropdown__values--empty');
        }
        
    }   else {
        request({
            uri: BASE_URL+'addevent',
            method: "post",
            form: dataToAdd
        }, function(error, response, body) {
            dataToAdd._id = JSON.parse(body);
            store.dispatch(addEvent([...events, dataToAdd]));
        });

        // localStorage.setItem('events', JSON.stringify([...events, dataToAdd]));

        let form = document.querySelector('.add-event__form');

        if ((form !== null) && (dropdown !== null)) {
            form.classList.remove('add-event__form--visible');
            dropdown.classList.remove('dropdown__values--empty');
        }
    }
}
