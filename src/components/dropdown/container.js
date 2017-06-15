/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import DropdownItem from './dropdownItem'
import { setDropdownValue } from './../../actions/setDropdownValue'
import { updateEventData } from './../../actions/updateEventData'
import store from './../../store/store'

class DropDown extends Component {
    setDropdownValue(e) {
        setDropdownValue(e, this.props);
    }
    
    render() {
        let users = this.props.users,
            sessionUsers = JSON.parse(sessionStorage.getItem('pickedUsers')),
            storePickedUsers = store.getState().pickedUsers,
            eventID = this.props.eventID,
            // eslint-disable-next-line
            pickedUsers,
            eventUsers;
        
        if (store.getState().events.filter(el => el.eventID === eventID).length > 0) {
            eventUsers = store.getState().events.filter(el => el.eventID === this.props.eventID)[0].eventUsers;
        }   else {
            eventUsers = store.getState().users;
        }

        let dropUsers = {};

        let usersToShow = [],
            availableUsers = [];
        
        // console.log('eventUsers', eventUsers);
        
        
        storePickedUsers.forEach(el => {
            let user = users.filter(user => user.id === el)[0];
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
            
        let event = [...store.getState().events].filter(el => el.eventID === eventID)[0],
            eventsToSet = [...store.getState().events].filter(el => el.eventID !== eventID);
        
        let eventDataToSet = {
            eventID: eventID,
            eventDate: event.eventDate,
            eventDescription: event.eventDescription,
            totalAmount: event.totalAmount,
            eventUsers: dropUsers.picked
        };
        
        console.log('evds', eventDataToSet);
            
            // store.dispatch(updateEventData([...eventsToSet, eventDataToSet]));
        
        
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
                                      setDropdownValue={this.setDropdownValue}
                                      availableUsers={dropUsers.available}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default DropDown
