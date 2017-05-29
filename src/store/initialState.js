/**
 * Created by eugene on 05/29/17.
 */

const initialState = {
    users: [
        {
            id: 1,
            name: 'Eugene',
            balance: 230
        },
        {
            id: 2,
            name: 'Tanya',
            balance: -10
        },
        {
            id: 3,
            name: 'Oleksiy',
            balance: 400
        }
    ],
    
    events: [
        {
            eventID: 7,
            eventDate: '02/06/2017',
            eventDescription: 'Цісар в п\'ятницю',
            totalAmount: 0
        },
        
        {
            eventID: 13,
            eventDate: '01/06/2017',
            eventDescription: 'Кам\'янець',
            totalAmount: 0
        }
    ],
    
    donations: [
        {
            userID: 3,
            eventID: 13,
            amount: 70,
            description: 'Cisar 4 beers',
            donationDate: '02/06/2017'
        },
        
        {
            userID: 3,
            eventID: 13,
            amount: 13,
            description: 'Cisar 2 pizzas',
            donationDate: '02/06/2017'
        },
        
        {
            userID: 1,
            eventID: 13,
            amount: 200,
            description: 'Cisar broken glass',
            donationDate: '02/06/2017'
        },
        
        {
            userID: 1,
            eventID: 7,
            amount: 400,
            description: 'kamianets beer',
            donationDate: '01/06/2017'
        }
    ]
};

export default initialState