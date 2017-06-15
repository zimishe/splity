/**
 * Created by eugene on 05/29/17.
 */

import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {

    switch (action.type) {
        case 'DONATION_ADDED' : return {
            users: state.users,
            events: state.events,
            donations: action.donations,
            pickedUsers: state.pickedUsers
        };
        
        case 'UPDATE_EVENT_DATA' : return {
            users: state.users,
            events: action.events,
            donations: state.donations,
            pickedUsers: state.pickedUsers
        };
        
        case 'EVENT_ADDED' : return {
            users: state.users,
            events: action.events,
            donations: state.donations,
            pickedUsers: state.pickedUsers
        }; 
        
        case 'PICKED_USERS' : return {
            users: state.users,
            events: state.events,
            donations: state.donations,
            pickedUsers: action.pickedUsers
        };
       
        default : return state
    }
};

export default reducer
