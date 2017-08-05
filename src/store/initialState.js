/**
 * Created by eugene on 05/29/17.
 */
import { RenderApp } from './../index'
import BASE_URL from './../actions/getHost'

let initialState = {};

fetch(BASE_URL+'getInitialData', {
    method: 'GET'
}).then(response => {
    response.json().then(data => {
        initialState.users = data.users;
        initialState.events = data.events;
        initialState.donations = data.donations;
        initialState.pickedUsers = [];
        initialState.loggedUserInfo = [];
    }).then(() => {
        RenderApp()
    })
});

export default initialState