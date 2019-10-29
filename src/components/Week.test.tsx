import * as React from 'react';
import { shallow } from 'enzyme';
import Week from './Week';

describe('Week', () => {
    const week = shallow(<Week />);

    it('renders a single week ul', () => {
        expect(week.find('ul').length).toBe(1);
        expect(week.find('.week').length).toBe(1);
    });
    
    it('matches snapshot', () => {
        expect(week).toMatchSnapshot();
    });
});