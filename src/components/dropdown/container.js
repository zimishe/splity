/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import DropdownItem from './dropdownItem'
import { getEventData } from './../../actions/getEventData'
import { setDropdownValue } from './../../actions/setDropdownValue'
import store from './../../store/store'

class DropDown extends Component {
    updateDropdownData(eventDataToSet, userID, e) {
        // console.log('eventDataToSet', eventDataToSet);
        // console.log('userID', userID);
        // console.log('e', e);
        //
        setDropdownValue(eventDataToSet, userID, e);
    }
    
    render() {
        let users = this.props.users,
            sessionUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
            eventID = this.props.eventID,
            // eslint-disable-next-line
            pickedUsers,
            eventUsers,
            eventDataToSet;
        
        if (store.getState().events.filter(el => el.eventID === eventID).length > 0) {
            eventUsers = store.getState().events.filter(el => el.eventID === this.props.eventID)[0].eventUsers;
        }   else {
            eventUsers = store.getState().users;
        }
        
        // console.log('dropdown event users', eventUsers);
        
        function setDropdownUsers(eventUsers) {
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
        
        if (sessionUsers !== null) {
            pickedUsers = sessionUsers.filter((el, index, arr) => arr.indexOf(el) === index);
        }
        
        return (
            <div className="dropdown">
                {/*<div className="dropdown__values">*/}
                    {/*{(*/}
                        {/*getSelectedUsers().picked.length > 0) ?*/}
                        {/*getSelectedUsers().picked.map((el, index) => */}
                        {/*<span key={index}>{el.name}</span>*/}
                    {/*) :*/}
                        {/*<span>Нікого не вибрано</span>}*/}
                {/*</div>*/}
                <ul className="dropdown__list">
                    {users.map((el, index) =>
                        <DropdownItem key={index}
                                      userID={el.id}
                                      userName={el.name}
                                      updateDropdownData={this.updateDropdownData.bind(this, getEventData(eventID, setDropdownUsers(eventUsers).picked), el.id)}
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
