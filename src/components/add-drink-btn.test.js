import React from 'react';
import {shallow} from 'enzyme';

import {AddDrinkBtn} from './add-drink-btn';

describe('<AddDrinkBtn />', () => {
    it('renders without crashing', () => {
        shallow(<AddDrinkBtn />);
    });
    it('should switch state to addDrink when button clicked', () => {
        const wrapper = shallow(<AddDrinkBtn />);
        wrapper.simulate('click');
        expect(wrapper.state('addDrink')).toEqual(true);
        //expect the button to dispatch a click??
    })
})