/**
 * Created by eugene on 06/09/17.
 */

import React, { Component } from 'react'
import Dropdown from './../dropdown/container'

class AddUserForm extends Component {
    render() {
        return (
            <div className="add-user">
                <Dropdown users={this.props.users} />
            </div>
        )
    }
}

export default AddUserForm