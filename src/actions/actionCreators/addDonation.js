/**
 * Created by eugene on 06/06/17.
 */

export function addDonation(donations) {
    return {
        type: 'DONATION_ADDED', donations: donations
    }
}
