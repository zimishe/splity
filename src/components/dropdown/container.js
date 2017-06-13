/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import DropdownItem from './dropdownItem'
import { setDropdownValue } from './../../actions/setDropdownValue'
import store from './../../store/store'

class DropDown extends Component {
    setDropdownValue(e) {
        setDropdownValue(e, this.props);
    }
    
    render() {
        let users = this.props.users,
            sessionUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
            storePickedUsers = store.getState().pickedUsers,
            // eslint-disable-next-line
            pickedUsers;
        
        
        function getSelectedUsers() {
            let usersToShow = [];

            storePickedUsers.forEach(el => {
                let user = users.filter(user => user.id === el)[0];

                usersToShow.push(user);
            });

            return usersToShow
        }
        
        if (sessionUsers !== null) {
            pickedUsers = sessionUsers.filter((el, index, arr) => arr.indexOf(el) === index);
        }
        
        
        return (
            <div className="dropdown">
                <div className="dropdown__values">
                    {(
                        getSelectedUsers().length > 0) ?
                        getSelectedUsers().map((el, index) => 
                        <span key={index}>{el.name}</span>
                    ) :
                        <span>Нікого не вибрано</span>}
                </div>
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
