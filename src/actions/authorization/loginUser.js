/**
 * Created by eugene on 08/05/17.
 */

import request from 'request'
import BASE_URL from './../../actions/getHost'
import store from './../../store/store'
import { setLoggedUserInfo } from './../../actions/actionCreators/setLoggedUserInfo'

export function loginUser(e, that) {
    let dataToSend = {},
        form = e.target,
        inputs = Array.from(form.getElementsByTagName('input'));

    inputs.forEach(el => {
        dataToSend[el.name] = el.value;
    });
    

    request({
        uri: BASE_URL+'login',
        method: "post",
        form: dataToSend
    }, function(error, response, body) {
        if (JSON.parse(body).status !== 1) {
            that.setState(() => {
                return {errors: JSON.parse(body).errors}
            })
        }   else {
            sessionStorage.setItem('loggedUserInfo', JSON.stringify(JSON.parse(body).userInfo));
            
            store.dispatch(setLoggedUserInfo(JSON.parse(body).userInfo));
            that.loginSuccess();
        }
    });
}
