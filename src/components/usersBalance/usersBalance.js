/**
 * Created by eugene on 06/08/17.
 */

import React from 'react'

import SingleUserBalance from './singleUserBalance'

import { countUserBalance, countTotalAmount } from './../../actions/countUserBalance'

const UsersBalance = ({ eventUsers, eventDonations, users }) => {
    return (
        <div className="users-balance">
            <h3>Users balance</h3>
            <div className="users-balance__caption">
                <h5>User</h5>
                <h5>Balance</h5>
            </div>
            <div className="users-balance__list">
                {eventUsers.map((el, i) =>
                    <SingleUserBalance key={i}
                                 userBalance={countUserBalance(el, eventUsers.length, countTotalAmount(eventDonations), eventDonations)}
                                 userName={users.filter(user => user._id === el._id)[0].name}
                    />
                )}
            </div>
            <div className="users-balance__total">
                <p>Total: <strong>{countTotalAmount(eventDonations)}</strong> грн</p>
            </div>
        </div>
    )
};

export default UsersBalance