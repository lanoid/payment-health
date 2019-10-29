import * as React from 'react';
import Day from './Day';

interface Props {
    week: any[];
}

export default class Week extends React.Component<Props> {
    static defaultProps: Props = {
        week: []
    }
    render() {
        return (
            <ul className={`week`}>
                {this.props.week.map((day, i) => <Day key={i} day={day} />)}
            </ul>
        )
    }
}