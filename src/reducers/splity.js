/**
 * Created by eugene on 05/29/17.
 */

import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {

    switch (action.type) {
        case 'DONATION_ADDED' : return {
            users: state.users,
            events: state.events,
            donations: action.donations
        };
        
        case 'EVENT_TOTAL_AMOUNT_CHANGED' : return {
            users: state.users,
            events: action.events,
            donations: state.donations
        };
       
        default : return state
    }
};

export default reducer
