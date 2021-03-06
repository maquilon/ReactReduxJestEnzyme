import React from 'react';
import { mount, shallow } from 'enzyme';
import { Money } from './Money';

describe('Money', () => {
    let props = { balance: 10, bitcoin: {} }
    let money = shallow(<Money {...props} />);

    it('renders properly', () => {
        expect(money).toMatchSnapshot();
    });

    // To check that the API has been called
    describe('when mounted', () => {
        const mockFetchbitcoin = jest.fn();

        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            money = mount( <Money {...props} /> );
        })

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } } };
            money = shallow(<Money {...props} />)
        })

        it('displays the correct bitcoin value', () => {
            expect(money.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        })
    });
});