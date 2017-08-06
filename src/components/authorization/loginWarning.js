/**
 * Created by eugene on 06.08.2017.
 */

import React from 'react'

const LoginWarning = (props) => {
    return(
        <div className={props.containerClass}>
            <h5>{props.message}</h5>
        </div>
    )
};

export default LoginWarning