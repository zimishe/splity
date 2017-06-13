/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import DropdownItem from './dropdownItem'
import { setDropdownValue } from './../../actions/setDropdownValue'

class DropDown extends Component {
    setDropdownValue(e) {
        setDropdownValue(e, this.props);
    }
    
    render() {
        let users = this.props.users,
            sessionUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
            pickedUsers;

        if (sessionUsers !== null) {
            pickedUsers = sessionUsers.filter((el, index, arr) => arr.indexOf(el) === index);
        }
        
        return (
            <div className="dropdown">
                <input type="text" disabled name="dropdown__value" id="dropdown__value" />
                <ul className="dropdown__list">
                    {users.map((el, index) =>
                        <DropdownItem key={index}
                                      userID={el.id}
                                      userName={el.name}
                                      setDropdownValue={this.setDropdownValue}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default DropDown
