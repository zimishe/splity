/**
 * Created by eugene on 06/13/17.
 */

export function addEvent(events) {
    return {
        type: 'EVENT_ADDED', events: events
    }
}