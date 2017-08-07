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
            pickedUsers: state.pickedUsers,
            loggedUserInfo: state.loggedUserInfo
        };
        
        case 'UPDATE_EVENT_DATA' : return {
            users: state.users,
            events: action.events,
            donations: state.donations,
            pickedUsers: state.pickedUsers,
            loggedUserInfo: state.loggedUserInfo
        };
        
        case 'EVENT_ADDED' : return {
            users: state.users,
            events: action.events,
            donations: state.donations,
            pickedUsers: state.pickedUsers,
            loggedUserInfo: state.loggedUserInfo
        }; 
        
        case 'PICKED_USERS' : return {
            users: state.users,
            events: state.events,
            donations: state.donations,
            pickedUsers: action.pickedUsers,
            loggedUserInfo: state.loggedUserInfo
        };
        
        case 'USER_LOGGED_IN' : return {
            users: state.users,
            events: state.events,
            donations: state.donations,
            pickedUsers: state.pickedUsers,
            loggedUserInfo: action.loggedUserInfo
        };

        case 'USER_REGISTERED' : return {
            users: [...state.users, action.newUser],
            events: state.events,
            donations: state.donations,
            pickedUsers: state.pickedUsers,
            loggedUserInfo: state.loggedUserInfo
        };
       
        default : return state
    }
};

export default reducer
