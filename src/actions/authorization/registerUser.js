/**
 * Created by eugene on 08/05/17.
 */

import request from 'request'
import BASE_URL from './../../actions/getHost'

export function registerUser(e, that) {
    let dataToSend = {},
        form = e.target,
        inputs = Array.from(form.getElementsByTagName('input'));

    inputs.forEach(el => {
        dataToSend[el.name] = el.value;
    });

    request({
        uri: BASE_URL+'register',
        method: "post",
        form: dataToSend
    }, function(error, response, body) {

        if (JSON.parse(body).status !== 1) {
            that.setState(() => {
                return {errors: JSON.parse(body).errors}
            })
        }   else {
            that.setState(() => {
                return {success: true}
            });

            that.registrationSuccess();
        }
    });
}