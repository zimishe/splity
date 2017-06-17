/**
 * Created by eugene on 06/13/17.
 */

import store from './../store/store'

import { addEvent } from './../actions/actionCreators/addEvent'

export function addEventData(e, date, description) {
    e.preventDefault();

    let pickedUsers = [...store.getState().pickedUsers],
        events = store.getState().events;
    
    console.log('picked', pickedUsers);
    
    let dataToAdd = {
        eventID: Math.floor(Math.random() * (10000 - 10)) + 10,
        eventDate: date,
        eventDescription: description,
        eventUsers: pickedUsers,
        totalAmount: 0
    };
    
    store.dispatch(addEvent([...events, dataToAdd]));

    localStorage.setItem('events', JSON.stringify([...events, dataToAdd]));

    let form = document.querySelector('.add-event__form');

    if (form !== null) {
        form.classList.remove('add-event__form--visible');
    }
}
