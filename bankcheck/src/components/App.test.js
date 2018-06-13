import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    // This test checks that the component renders correctly.
    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    // To check the title
    it('display title', () => {
        expect(app.find('.title').text()).toEqual('Bank Account');
    })

    // This test checks that the component is connected to the redux store.
    it('contains a Connected Wallet component', () => {
        //console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    // This test checks that the component is connected to the redux store.
    it('contains a connected Money component', () => {
        expect(app.find('Connect(Money)').exists()).toBe(true);
    })

})