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
        },
        
        {
            id: 7,
            name: 'Donald Trump',
            balance: 100
        }
    ],
    
    events: [
        {
            eventID: 7,
            eventDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)',
            eventDescription: 'Цісар в п\'ятницю',
            totalAmount: 400
        },
        
        {
            eventID: 13,
            eventDate: 'Tue May 31 2017 19:33:47 GMT+0300 (FLE Daylight Time)',
            eventDescription: 'Кам\'янець',
            totalAmount: 500
        }
    ],
    
    donations: [
        {
            userID: 3,
            eventID: 13,
            amount: 30,
            description: 'Cisar 4 beers',
            donationDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)'
        },
        
        {
            userID: 3,
            eventID: 13,
            amount: 20,
            description: 'Cisar 2 pizzas',
            donationDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)'
        },
        
        {
            userID: 1,
            eventID: 13,
            amount: 400,
            description: 'Cisar broken glass',
            donationDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)'
        },
        
        {
            userID: 1,
            eventID: 7,
            amount: 400,
            description: 'kamianets beer',
            donationDate: 'Tue May 31 2017 10:33:47 GMT+0300 (FLE Daylight Time)'
        }
    ]
};

export default initialState