import * as React from 'react';
import { shallow } from 'enzyme';
import Year from './Year';

describe('Year', () => {
    const year = shallow(<Year />);
    expect(year.find('h1').text()).toEqual('Transactions in the past year');
    
    it('matches snapshot', () => {
        expect(year).toMatchSnapshot();
    });
});