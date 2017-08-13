/**
 * Created by eugene on 05/31/17.
 */

import React from 'react'

const SingleUserBalance = ({userBalance, userName}) => {
    function checkBalance(userBalance) {
        if (userBalance < 0) {
            return 'user-balance__item user-balance__item--in-debt'
        }   else {
            return 'user-balance__item user-balance__item--clear'
        }
    }
    
    return (
        <div className={checkBalance(userBalance)}>
            <div className="users-balance__name">
                <p>{userName}</p>
            </div> 
            <div className="users-balance__sum">
                <p>
                    <strong>{userBalance.toFixed(2)}</strong> грн
                </p>
            </div>
        </div>
    )
};

export default SingleUserBalance