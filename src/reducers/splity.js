/**
 * Created by eugene on 05/29/17.
 */

import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {

    switch (action.type) {
        case 'DONATION_ADDED' : return {
            
        };
       
        default : return state
    }
};

export default reducer
