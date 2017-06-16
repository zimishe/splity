/**
 * Created by eugene on 06/13/17.
 */

import store from './../store/store'
import { setPickedUsers } from './../actions/actionCreators/setPickedUsers'
import { updateEventData } from './../actions/updateEventData'

export function setDropdownValue(props, userID, e) {
    console.log('e', e);
    console.log('eventDataToSet', props.eventID);
    console.log('userID', userID);
    
    let classlist = e.target.classList,
        valueToSet = [],
        pickedUsersSession = sessionStorage.getItem('pickedUsers');
    
    let eventsToSet = [...store.getState().events].filter(el => el.eventID !== props.eventID);
    

    if (!classlist.contains('dropdown__list__item__remove')) {

        if (pickedUsersSession !== null) {
            let sessionUsers = [...JSON.parse(pickedUsersSession), userID];
            valueToSet = sessionUsers.filter((el, index, arr) => arr.indexOf(el) === index);
        }   else {
            valueToSet.push(userID);
        }
        
        store.dispatch(setPickedUsers(valueToSet));

        sessionStorage.setItem('pickedUsers', JSON.stringify(valueToSet));
        classlist.add('dropdown__list__item--selected');

    }   else {
        let pickedUsers = JSON.parse(pickedUsersSession).filter(el => el !== userID);

        store.dispatch(setPickedUsers(pickedUsers));
        
        sessionStorage.setItem('pickedUsers', JSON.stringify(pickedUsers));
        e.target.closest('.dropdown__list__item').classList.remove('dropdown__list__item--selected');
    }
    
    store.dispatch(updateEventData([...eventsToSet, props]));
    
}
