import DateString from './dateString';

import { transaction } from '../types/transaction';
import { day } from '../types/day';
import { resetWarningCache } from 'prop-types';

export default (day: day, data: transaction[], dictionary: any) => {
    // Set defaults & counters
    const date = DateString(day.date);
    
    day.score = 0;
    day.failures = 0;
    day.successes = 0;
    day.simpleDate = DateString(day.date, '/', 'DMY');
    day.class = dictionary.noDataClass;
    day.type = dictionary.noDataLabel;
    
    // Filter transaction data relevant to the day
    day.transactions = data.filter((dataDay: any) => {
        if(dataDay.date === date) return true;
    });

    // Generate a score for failure or success
    day.transactions.map((transaction: any) => {
        if(transaction.transactionType === 'success') {
            day.successes++;
            day.score++;
        } else {
            day.failures++;
            day.score--;
        }
    });

    // Set labels and score
    if(day.score > 0) {
        day.class = dictionary.successClass
        day.type = dictionary.successLabel;
    } else if (day.score < 0) {
        day.class = dictionary.failureClass;
        day.type = dictionary.failureLabel;
        day.score = Math.abs(day.score);
    }
    return day;
}