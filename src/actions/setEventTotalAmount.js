/**
 * Created by eugene on 06/06/17.
 */
export function setEventTotalAmount(events) {
    return {
        type: 'EVENT_TOTAL_AMOUNT_CHANGED', events: events
    }
}