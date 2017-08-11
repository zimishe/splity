/**
 * Created by eugene on 06.08.2017.
 */
import { createNewStore } from './../../store/store'

export function checkLogged() {
    let userInfo = sessionStorage.getItem('loggedUserInfo'),
        storeInfo = createNewStore().getState().loggedUserInfo;

    console.log('ns', createNewStore().getState().loggedUserInfo);

    if ((userInfo !== null) || !Array.isArray(storeInfo)) {
        return true
    }
}
