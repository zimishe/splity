/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import store from './../../store/store'

class DropdownItem extends Component {
    render() {
        let eventDataToSet = this.props.eventDataToSet,
            storeUsers,
            pickedUser;

        if (eventDataToSet === undefined) {
            storeUsers = store.getState().pickedUsers;
        }   else {
            storeUsers = eventDataToSet.eventUsers;
        }
        
        pickedUser = storeUsers
            .filter(el => el._id === this.props.userID)
            .length;
        
        function checkSelected() {
            if ((pickedUser > 0) && (pickedUser !== null)) {
                return 'dropdown__list__item dropdown__list__item--selected'
            }   else {
                return 'dropdown__list__item'
            }
        }
        
        return(
            <li className={checkSelected()}
                onClick={this.props.updateDropdownData}>
                {this.props.userName}
                <a className="dropdown__list__item__remove">x</a>
            </li>
        )
    }
}

export default DropdownItem