/**
 * Created by eugene on 06/12/17.
 */

import React, { Component } from 'react'

class DropdownItem extends Component {
    render() {
        return(
            <li onClick={this.props.setDropdownValue.bind(this)}>{this.props.userName}</li>
        )
    }
}

export default DropdownItem