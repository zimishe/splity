/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import DropdownItem from './dropdownItem'
import { getEventData } from '../../actions/eventActions/getEventData'
import { setDropdownValue } from '../../actions/dropdown/setDropdownValue'
import store from './../../store/store'

class DropDown extends Component {
    updateDropdownData(eventDataToSet, userID, e) {
        setDropdownValue(eventDataToSet, userID, e);
    }
    
    toggleDropdown() {
        let list = document.querySelector('.dropdown__list');
        
        if (list !== null) {
            list.classList.toggle('dropdown__list--opened');
        }
    }
    
    render() {
        let users = this.props.users,
            sessionUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
            eventID = this.props.eventID,
            // eslint-disable-next-line
            pickedUsers,
            eventUsers;

        if (store.getState().events.filter(el => el._id === eventID).length > 0) {
            eventUsers = store.getState().events.filter(el => el._id === this.props.eventID)[0].eventUsers;
        }   else {
            eventUsers = store.getState().pickedUsers;
        }
        
        function setDropdownUsers(eventUsers) {
            let dropUsers = {};

            let usersToShow = [],
                availableUsers = [];
            
            eventUsers.forEach(el => {
                let user = [...users].filter(user => user._id === el._id)[0];
                
                usersToShow.push(user);

                // console.log('usersToShow', usersToShow);
            });

            let evUsersInd = [...eventUsers].map(el => el._id);

            [...users].forEach(el => {
                if (![...evUsersInd].includes(el._id) && (!availableUsers.includes(el))) {
                    availableUsers.push(el)
                }
            });

            dropUsers.picked = usersToShow;
            dropUsers.available = availableUsers;
            
            return dropUsers
        }
        
        if (sessionUsers !== null) {
            pickedUsers = sessionUsers.filter((el, index, arr) => arr.indexOf(el) === index);
        }
        
        return (
            <div className="dropdown">
                <div className="dropdown__values"
                     data-error="Будь-ласка, оберіть користувачів"
                     onClick={this.toggleDropdown}>
                    {(
                        eventUsers.length > 0) ?
                        eventUsers.map((el, index) => 
                        <span key={index}>{el.name}</span>
                    ) :
                        <span>Нікого не вибрано</span>}
                </div>
                <ul className="dropdown__list">
                    {users.map((el, index) =>
                        <DropdownItem key={index}
                                      userID={el._id}
                                      userName={el.name}
                                      updateDropdownData={this.updateDropdownData
                                          .bind(this, 
                                                getEventData(eventID, setDropdownUsers(eventUsers).picked),
                                                el._id)}
                                      availableUsers={setDropdownUsers(eventUsers).available}
                                      eventDataToSet={getEventData(eventID, setDropdownUsers(eventUsers).picked)}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default DropDown
