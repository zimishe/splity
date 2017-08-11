/**
 * Created by eugene on 05/29/17.
 */

import { createStore } from 'redux'
import reducer from './../reducers/splity'

export function createNewStore(initialState) {
    if (initialState === undefined) {
        initialState = window.__STORE__DATA
    }
    
    return createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}



