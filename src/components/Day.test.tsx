import * as React from 'react';
import { shallow } from 'enzyme';
import Day from './Day';

describe('Day', () => {
    const dayObj = {
        date: new Date(),
        monthLabel: true
    };
    const day = shallow(<Day key={1} day={dayObj} />);

    it('matches snapshot', () => {
        expect(day).toMatchSnapshot();
    });
});