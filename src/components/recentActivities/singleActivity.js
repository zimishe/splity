/**
 * Created by eugene on 05/31/17.
 */

import React from 'react'

import { getFullDate } from './../../actions/formatDate'

const SingleActivity = ({data, userName}) => {
    return (
        <div className="recent-activities__item">
            <p><span>{getFullDate(data.donationDate)}</span>
               <span>{userName}</span> вніс 
               <strong>{data.amount} грн </strong>
               <span>з описом </span>'{data.description}' </p>
        </div>
    )
};

export default SingleActivity
