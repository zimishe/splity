/**
 * Created by eugene on 05/29/17.
 */
import { RenderApp } from './../index'

let initialState = {};

let BASE_URL;

if (window.location.hostname === 'localhost') {
    BASE_URL = 'http://localhost:3001/';
}   else {
    BASE_URL = 'https://api-splity.herokuapp.com/';
}

fetch(BASE_URL+'getInitialData', {
    method: 'GET'
}).then(response => {
    response.json().then(data => {
        initialState.users = data.users;
        initialState.events = data.events;
        initialState.donations = data.donations;
        initialState.pickedUsers = [];
    }).then(() => {
        RenderApp()
    })
});

export default initialState