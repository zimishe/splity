/**
 * Created by eugene on 07/12/17.
 */
let BASE_URL;

if (window.location.hostname === 'localhost') {
    BASE_URL = 'http://localhost:3001/';
}   else {
    BASE_URL = 'https://api-splity.herokuapp.com/';
}

export default BASE_URL