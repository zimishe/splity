/**
 * Created by eugene on 08/05/17.
 */

import React from 'react'

const UserInfo = (props) => {
    return (
        <div className="user-info">
            Welcome, {props.name}
        </div>
    )    
};

export default UserInfo;

