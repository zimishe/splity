/**
 * Created by eugene on 06/17/17.
 */

import store from './../store/store'

export function getEventData(eventID, eventUsers) {
    let event = [...store.getState().events].filter(el => el.eventID === eventID)[0];
    
    // console.log('evID', eventID);
    // console.log('eventUsers', eventUsers);

    if (eventID !== undefined) {
        return  {
            eventID: eventID,
            eventDate: event.eventDate,
            eventDescription: event.eventDescription,
            totalAmount: event.totalAmount,
            eventUsers: eventUsers
        }
    }
}