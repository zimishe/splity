/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'
import DropdownItem from './dropdownItem'


class DropDown extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pickedUsers : 1
        };
    }
    
    setDropdownValue(e) {
        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
        }   else {
            let valueToSet = [];

            let pickedUsersSession = sessionStorage.getItem('pickedUsers');

            if (pickedUsersSession !== null) {
                valueToSet = [...JSON.parse(pickedUsersSession), this.props.userID];
            }   else {
                valueToSet.push(this.props.userID);
            }

            sessionStorage.setItem('pickedUsers', JSON.stringify(valueToSet));
            e.target.classList.add('selected');
        }
        
        console.log('picked', JSON.parse(sessionStorage.getItem('pickedUsers')));
    }
    
    render() {
        let users = this.props.users;
        
        console.log('ts', this.props);
        
        return (
            <div className="dropdown">
                <input type="text" disabled name="dropdown__value" id="dropdown__value" value={this.state.pickedUsers} />
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
