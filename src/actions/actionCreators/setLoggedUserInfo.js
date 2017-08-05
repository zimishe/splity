/**
 * Created by eugene on 08/05/17.
 */

export function setLoggedUserInfo(loggedUserInfo) {
    return {
        type: 'USER_LOGGED_IN', loggedUserInfo: loggedUserInfo
    }
}