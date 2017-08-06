/**
 * Created by eugene on 06.08.2017.
 */

import React from 'react'
import { countUserBalance, countTotalAmount } from '../../actions/eventActions/countUserBalance'

const BalanceSummary = (props) => {
    return (
        <div className="users-balance__total">
            <p>Загалом: <strong>{countTotalAmount(props.eventDonations)}</strong> грн</p>
            <p>З кожного: <strong>{countTotalAmount(props.eventDonations)/props.eventUsers.length} </strong> грн
            </p>

            <p>Ви внесли: <strong>{countUserBalance(
                props.userInfo,
                props.eventUsers.length,
                countTotalAmount(props.eventDonations),
                props.eventDonations) +
            countTotalAmount(props.eventDonations)/props.eventUsers.length}
            </strong> грн
            </p>
        </div>
    )
};

export default BalanceSummary