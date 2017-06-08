/**
 * Created by eugene on 05/29/17.
 */
import { RenderApp } from './../index'

console.log('eventsStorage', JSON.parse(localStorage.getItem('events')));

let events = localStorage.getItem('events'),
    users = localStorage.getItem('users'),
    donations = localStorage.getItem('donations');

function checkData() {
    return new Promise((resolve) => {
        if (events !== null) {
            events = JSON.parse(localStorage.getItem('events'));
        }   else {
            events = [
                {
                    eventID: 7,
                    eventDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)',
                    eventDescription: 'Цісар в п\'ятницю',
                    eventUsers: [],
                    totalAmount: 0
                },

                {
                    eventID: 13,
                    eventDate: 'Tue May 31 2017 19:33:47 GMT+0300 (FLE Daylight Time)',
                    eventDescription: 'Кам\'янець',
                    eventUsers: [],
                    totalAmount: 0
                }
            ]
        }

        if (users !== null) {
            users = JSON.parse(localStorage.getItem('users'));
        }   else {
            users = [
                {
                    id: 1,
                    name: 'Євген',
                    balance: 0
                },
                {
                    id: 2,
                    name: 'Таня',
                    balance: 0
                },
                {
                    id: 3,
                    name: 'Олексій',
                    balance: 0
                },

                {
                    id: 7,
                    name: 'Donald Trump',
                    balance: 0
                }
            ]
        }
        
        if (donations !== null) {
            donations = JSON.parse(localStorage.getItem('donations'));
        }   else {
            donations = [
                {
                    userID: 3,
                    eventID: 13,
                    amount: 30,
                    description: 'коньяк і кола в Танька',
                    donationDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)'
                },

                {
                    userID: 3,
                    eventID: 13,
                    amount: 20,
                    description: 'картопля фрі і хот-доги Фрі Хаус',
                    donationDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)'
                },

                {
                    userID: 1,
                    eventID: 13,
                    amount: 400,
                    description: 'квитки на поїзд в Кам\'янець',
                    donationDate: 'Tue May 30 2017 19:33:47 GMT+0300 (FLE Daylight Time)'
                },

                {
                    userID: 1,
                    eventID: 7,
                    amount: 400,
                    description: 'вхідні квитки в фортецю Кам\'янець',
                    donationDate: 'Tue May 31 2017 10:33:47 GMT+0300 (FLE Daylight Time)'
                }
            ]
        }
        
        resolve()
    })
}

checkData().then(() => {
    RenderApp()
});

const initialState = {
    users: users,
    events: events,
    donations: donations
};

export default initialState