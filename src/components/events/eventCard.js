/**
 * Created by eugene on 29.05.2017.
 */
// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getShortDate } from './../../actions/formatDate'

const EventCard = ({props}) => {
    let url = 'event/'+props.eventID;

    return (
        <div className="event">
            <Link to={url} className="event__info">
                <h3>{getShortDate(props.eventDate)}</h3>
                <h4>{(props.eventDescription !== '') ? props.eventDescription : 'Без опису :('}</h4>
                <p>Витрачено: <strong>{props.totalAmount}</strong> грн.</p>
            </Link>
        </div>
    )
};

export default EventCard;
 