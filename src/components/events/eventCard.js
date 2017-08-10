/**
 * Created by eugene on 29.05.2017.
 */
// eslint-disable-next-line
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getShortDate } from '../../actions/formatDate/formatDate'

const EventCard = ({props}) => {
    let url = 'event/'+props._id;

    return (
        <div className="event">
            <Link to={url} className="event__info">
                <div className="event__info__caption">
                    <h3>{getShortDate(props.eventDate)}</h3>
                    <span className="event__info__total">
                        <strong>{props.totalAmount}</strong> грн.
                    </span>
                </div>
                <h4>{(props.eventDescription !== '') ? props.eventDescription : 'Без опису :('}</h4>
                <div className="event__info__bottom-info">
                    <span className="event__info__users">
                        <ul>
                            {props.eventUsers.map((user, i) =>
                                <li key={i}>
                                    {user.name}
                                </li>
                            )}
                        </ul>
                    </span>
                </div>
            </Link>
        </div>
    )
};

export default EventCard;
 