/**
 * Created by eugene on 05/29/17.
 */

import { createStore } from 'redux'
import initialState from './initialState'
import reducer from './../reducers/splity'

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store

