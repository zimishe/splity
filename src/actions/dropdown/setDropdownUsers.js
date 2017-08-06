/**
 * Created by eugene on 06/17/17.
 */

export function setDropdownUsers(users, eventUsers) {
    console.log('evusr', eventUsers);
    console.log('usr', users);
    
    let dropUsers = {};

    let usersToShow = [],
        availableUsers = [];

    eventUsers.forEach(el => {
        let user = [...users].filter(user => user.id === el.id)[0];
        usersToShow.push(user);
    });

    let evUsersInd = [...eventUsers].map(el => el.id);

    [...users].forEach(el => {
        if (![...evUsersInd].includes(el.id) && (!availableUsers.includes(el))) {
            availableUsers.push(el)
        }
    });

    dropUsers.picked = usersToShow;
    dropUsers.available = availableUsers;

    return dropUsers
}