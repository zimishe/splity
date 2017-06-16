/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'

class DropdownItem extends Component {
    render() {
        let sessionUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
            pickedUser;
        
        if (sessionUsers !== null) {
            pickedUser = sessionUsers
                .filter(el => el === this.props.userID)
                .length;
        }
        
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