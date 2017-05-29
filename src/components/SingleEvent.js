import React, { Component } from 'react'

const SingleEvent = ({props}) => {

    return (
        <div className="event">
            <div className="event__info">
                <h3>{props.eventDate}</h3>
                <h4>{props.eventDescription}</h4>
                <p>Витрачено: <strong>{props.totalAmount}</strong> грн.</p>
            </div>
        </div>
    )
}

export default SingleEvent;