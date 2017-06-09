/**
 * Created by eugene on 06/08/17.
 */

import React from 'react'

import SingleActivity from './singleActivity'

const RecentActivities = ({ eventDonations, users }) => {
    return (
        <div className="recent-activities">
            <h3>Recent Activities</h3>
            <div className="recent-activities__list">
                {eventDonations.map((el, i) =>
                    <SingleActivity key={i}
                                    data={el}
                                    userName={users.filter(user => user.id === el.userID)[0].name}
                    />
                )}

            </div>
        </div>
    )
};

export default RecentActivities