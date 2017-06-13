/**
 * Created by eugene on 06/13/17.
 */

export function setDropdownValue(e, props) {
    let classlist = e.target.classList,
        valueToSet = [],
        pickedUsersSession = sessionStorage.getItem('pickedUsers');

    if (!classlist.contains('dropdown__list__item__remove')) {

        if (pickedUsersSession !== null) {
            let sessionUsers = [...JSON.parse(pickedUsersSession), props.userID];
            valueToSet = sessionUsers.filter((el, index, arr) => arr.indexOf(el) === index);
        }   else {
            valueToSet.push(props.userID);
        }

        sessionStorage.setItem('pickedUsers', JSON.stringify(valueToSet));
        classlist.add('dropdown__list__item--selected');

    }   else {
        let pickedUsers = JSON.parse(pickedUsersSession).filter(el => el !== props.userID);

        sessionStorage.setItem('pickedUsers', JSON.stringify(pickedUsers));
        e.target.closest('.dropdown__list__item').classList.remove('dropdown__list__item--selected');
    }
}
