/**
 * Created by eugene on 06.08.2017.
 */
import store from './../../store/store'

export function checkLogged() {
    let userInfo = sessionStorage.getItem('loggedUserInfo'),
        storeInfo = store.getState().loggedUserInfo;

    if ((userInfo !== null) || !Array.isArray(storeInfo)) {
        return true
    }
}
