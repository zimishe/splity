/**
 * Created by eugene on 06/17/17.
 */

import store from './../store/store'

export function getEventData(eventID, eventUsers) {
    let event = [...store.getState().events].filter(el => el._id === eventID)[0];

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