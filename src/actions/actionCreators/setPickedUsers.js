/**
 * Created by eugene on 06/13/17.
 */

export function setPickedUsers(pickedUsers) {
    return {
        type: 'PICKED_USERS', pickedUsers: pickedUsers
    }
}