/**
 * Created by eugene on 05/31/17.
 */

export function countUserBalance(userID, userscount, total, donations) {
    function getUserDonations() {
        return donations
            .filter(el => el.userID === userID._id)
            .map(el => parseInt(el.amount, 10))
            .reduce((sum, current) => {
                return sum + current;
            }, 0);
    }
    
    return -((total/userscount) - getUserDonations());
}

export function countTotalAmount(donations) {
    return donations
        .map(el => parseInt(el.amount, 10))
        .reduce((sum, current) => {
            return sum + current;
        }, 0);
}