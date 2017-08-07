/**
 * Created by eugene on 07.08.2017.
 */

export function registerNewUser(newUser) {
    return {
        type: 'USER_REGISTERED', newUser: newUser
    }
}