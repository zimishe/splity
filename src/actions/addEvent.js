/**
 * Created by eugene on 06/13/17.
 */

import store from './../store/store'

import BASE_URL from './../actions/getHost'
import { addEvent } from './../actions/actionCreators/addEvent'

export function addEventData(e, date, description) {
    e.preventDefault();

    let pickedUsers = [...store.getState().pickedUsers],
        events = store.getState().events;
    
    let dataToAdd = {
        eventDate: date,
        eventDescription: description,
        eventUsers: pickedUsers,
        totalAmount: 0
    };
    
    store.dispatch(addEvent([...events, dataToAdd]));

    fetch(BASE_URL+'addevent', {
        method: 'post',
        body: '228'
    }).then(response => {
        console.log('response', response);
    });
     
    // localStorage.setItem('events', JSON.stringify([...events, dataToAdd]));

    let form = document.querySelector('.add-event__form');

    if (form !== null) {
        form.classList.remove('add-event__form--visible');
    }
}
