/**
 * Created by eugene on 05/31/17.
 */

export function countUserBalance(userID, userscount, total, donations) {
    function getUserDonations() {
        
        return donations
            .filter(el => el.userID === userID)
            .map(el => el.amount)
            .reduce((sum, current) => {
                return sum + current;
            }, 0);
    }
    
    return -((total/userscount) - getUserDonations());
}

export function countTotalAmount(donations, userscount, total) {
    return donations
        .map(el => el.amount)
        .reduce((sum, current) => {
            return sum + current;
        }, 0);
}