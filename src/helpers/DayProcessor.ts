import DateString from './DateString';

import { transaction } from '../types/transaction';
import { day } from '../types/day';

export default (day: day, data: transaction[], dictionary: any) => {
    // Set defaults & counters
    const date = DateString(day.date);
    
    day.score = 0;
    day.failures = 0;
    day.successes = 0;
    day.simpleDate = DateString(day.date, '/', 'DMY');
    day.class = dictionary.noDataClass;
    day.type = dictionary.noDataLabel;
    day.value = 0;
    
    // Filter transaction data relevant to the day
    day.transactions = data.filter((dataDay: any) => {
        if(dataDay.date === date) return true;
    });

    // Generate a score for failure or success
    day.transactions.map((transaction: any) => {
        if(transaction.transactionType === 'success') {
            day.successes += Math.floor(transaction.amount);
            day.score++;
            day.value += Math.floor(transaction.amount);
        } else {
            day.failures += Math.floor(transaction.amount);
            day.score--;
            day.value -= Math.floor(transaction.amount);
        }
    });

    day.score = Math.floor(Math.abs(day.value) / 10) % 10;

    // Set labels and score
    if(day.successes > day.failures) {
        day.class = dictionary.successClass
        day.type = dictionary.successLabel;
    } else if (day.failures > day.successes){
        day.class = dictionary.failureClass;
        day.type = dictionary.failureLabel;
        day.score = Math.abs(day.score);
    }

    return day;
}