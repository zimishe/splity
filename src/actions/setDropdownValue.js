/**
 * Created by eugene on 06/13/17.
 */

import store from './../store/store'
import { getEventData } from './../actions/getEventData'
import { setPickedUsers } from './../actions/actionCreators/setPickedUsers'
import { updateEventData } from './../actions/updateEventData'

export function setDropdownValue(props, userID, e) {
    let classlist = e.target.classList,
        eventsToSet,
        usersToSet,
        pickedUsers = [...store.getState().pickedUsers],
        userToAdd = [...store.getState().users].filter(el => el._id === userID)[0];
    
    if (props !== undefined) {
        eventsToSet = [...store.getState().events].filter(el => el.eventID !== props.eventID);
    }   
    
    if (!classlist.contains('dropdown__list__item__remove')) {
        if (props !== undefined) {
            usersToSet = [...props.eventUsers, userToAdd];
        }   else {
            pickedUsers.push(userToAdd);
        }
        
        classlist.add('dropdown__list__item--selected');
    
    }   else {
        
        if (props !== undefined) {
            usersToSet = [...props.eventUsers].filter(el => el.id !== userID);
        }   else {
            pickedUsers = [...pickedUsers].filter(el => el.id !== userID);
        }
        
        e.target.closest('.dropdown__list__item').classList.remove('dropdown__list__item--selected');
    }
    
    if (props !== undefined) {
        if (usersToSet !== undefined) {
            usersToSet = [...new Set(usersToSet)];
            
            store.dispatch(updateEventData([...eventsToSet, getEventData(props.eventID, usersToSet)]));    
        }
        
    }   else {
        
        if (pickedUsers !== undefined) {
            pickedUsers = [...new Set(pickedUsers)];
            
            store.dispatch(setPickedUsers(pickedUsers));    
        }
    }
    
    console.log('store', store.getState());
}
