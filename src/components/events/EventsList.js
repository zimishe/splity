/**
 * Created by eugene on 29.05.2017.
 */

import React, { Component } from 'react'
import EventCard from './eventCard'
import store from './../../store/store'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'


const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        editTooltipTextHandler: function () {
            console.log('here');
        }
    }
};

const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};

class EventsList extends Component {
    render() {
        let events = this.props.data.events;

        return  (
            <div className="events__list">
                {
                    events.map((el, i) =>
                        <EventCard key={i}
                                   props={el}
                        />
                    )
                }
            </div>
        )
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsList))

