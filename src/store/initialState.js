/**
 * Created by eugene on 05/29/17.
 */
import { RenderApp } from './../index'
import BASE_URL from './../actions/getHost'
import request from 'request'

import { createNewStore } from './store'

// fetch(BASE_URL+'getInitialData', {
//     method: 'GET'
// }).then(response => {
//     response.json().then(data => {
//         initialState.users = data.users;
//         initialState.events = data.events;
//         initialState.donations = data.donations;
//         initialState.pickedUsers = [];
//         initialState.loggedUserInfo = [];
//     }).then(() => {
//         RenderApp()
//     })
// });'

request({
    uri: BASE_URL,
    method: "get"
}, function(error, response, body) {
    let html = document.getElementsByTagName('html')[0],
        data = JSON.parse(body);
    
    window.__STORE__DATA = data.storage;
    
    const store = createNewStore(data.storage);
    
    html.innerHTML = data.page;
    
    RenderApp(store);
});

