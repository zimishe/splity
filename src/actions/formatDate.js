/**
 * Created by eugene on 05/30/17.
 */

export function getShortDate(fullDate) {
    return  new Date(fullDate).getDate()+'/'+
            new Date(fullDate).getMonth()+'/'+
            new Date(fullDate).getFullYear();
}

export function getFullDate(fullDate) {
    return  new Date(fullDate).getDate()+'/'+
            new Date(fullDate).getMonth()+'/'+
            new Date(fullDate).getFullYear()+', '+
            new Date(fullDate).getHours()+':'+
            new Date(fullDate).getMinutes()+':'+
            new Date(fullDate).getSeconds();
}