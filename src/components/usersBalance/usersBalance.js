/**
 * Created by eugene on 06/08/17.
 */

import React from 'react'

import SingleUserBalance from './singleUserBalance'
import LoginWarning from './../../components/authorization/loginWarning'

import BalanceSummary from './summary'
import { checkLogged } from './../../actions/authorization/checkLogged'
import { countUserBalance, countTotalAmount } from '../../actions/eventActions/countUserBalance'

const UsersBalance = ({ eventUsers, eventDonations, users }) => {
    let userInfo = JSON.parse(sessionStorage.getItem('loggedUserInfo'));

    function checkBalance() {
        if (checkLogged()) {
            return <BalanceSummary eventDonations={eventDonations}
                                   eventUsers={eventUsers}
                                   userInfo={userInfo}
                    />
        }   else {
            return <LoginWarning message="you must be logged in to see balance"
                                 containerClass="user-balance__total__warning"
                    />
        }
    }

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
                                 userBalance={countUserBalance(
                                                el,
                                                eventUsers.length,
                                                countTotalAmount(eventDonations),
                                                eventDonations)}
                                 userName={users.filter(user => user._id === el._id)[0].name}
                    />
                )}
            </div>
            {checkBalance()}
        </div>
    )
};

export default UsersBalance