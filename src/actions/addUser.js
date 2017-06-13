/**
 * Created by eugene on 06/13/17.
 */

import store from './../store/store'

import { addEvent } from './../actions/actionCreators/addEvent'

export function addUser(e, date, description) {
    e.preventDefault();

    let pickedUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
        storeUsers = store.getState().users,
        events = store.getState().events,
        usersToSend = [];
    
    if (pickedUsers.length > 0) {
        pickedUsers.forEach(el => {
            let user = storeUsers.filter(user => user.id === el)[0];
            
            usersToSend.push(user);
        })
    }
    
    let dataToAdd = {
        eventID: Math.floor(Math.random() * (10000 - 10)) + 10,
        eventDate: date,
        eventDescription: description,
        eventUsers: usersToSend,
        totalAmount: 0
    };
    
    store.dispatch(addEvent([...events, dataToAdd]));
}
