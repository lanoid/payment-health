import * as React from 'react';
import GenerateYear from '../helpers/GenerateYear';
import Week from './Week';

interface Props {
    weeks: any[];
    dictionary: {
        transactionHeader: string;
        weekdays: string[];
    }
};

export default class Year extends React.Component<Props> {

    static defaultProps: Props = {
        weeks: [],
        dictionary: {
            transactionHeader: 'Transactions in the past year',
            weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    }

    render () {
        const { dictionary } = this.props;
        const weeks = GenerateYear();
        
        return (
            <div>
                <h1>{dictionary.transactionHeader}</h1>
                <div className={`year`}>
                    <ul className={`day-column`}>
                        {dictionary.weekdays.map((day, i) => <li key={i} className={`day-header`}>{day}</li>)}
                    </ul>
                    {weeks.map((week, i) => <Week week={week} key={i} />)}
                </div>
            </div>
        )
    }
}