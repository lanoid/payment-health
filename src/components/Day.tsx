import * as React from 'react';
import data from '../data/evezy-transactions';
import DayProcessor from '../helpers/DayProcessor';

import { day } from '../types/day';

interface Props {
    day: day;
    dictionary: {
        successLabel: string;
        successesLabel: string;
        failureLabel: string;
        failuresLabel: string;
        noDataLabel: string;
        successClass: string;
        failureClass: string;
        noDataClass: string;
        months: string[];
    };
}

export default class Day extends React.Component<Props> {
    static defaultProps: Partial<Props> = {
        dictionary: {
            successLabel: 'success',
            successesLabel: 'successes',
            failureLabel: 'failure',
            failuresLabel: 'failures',
            noDataLabel: 'no data',
            successClass: 'success',
            failureClass: 'failure',
            noDataClass: 'no-data',
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    }
    
    render () {
        const { day, dictionary } = this.props;
        const currentDay = DayProcessor(day, data, dictionary);
        return (
            <li className={`day ${currentDay.class}-${Math.abs(currentDay.score)} ${currentDay.monthLabel ? dictionary.months[currentDay.date.getMonth()].toLowerCase() : ''}`} title={`${currentDay.simpleDate} ${currentDay.type} ${currentDay.value} - ${currentDay.successes} ${dictionary.successesLabel}/${currentDay.failures} ${dictionary.failuresLabel}`}></li>
        )
    }
}