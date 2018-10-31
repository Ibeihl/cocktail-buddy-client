import React from 'react';
import {shallow} from 'enzyme';

import {AddDrink} from '../components/add-drink';

describe('<AddDrink />', () => {
    it('renders without crashing', () => {
        shallow(<AddDrink />);
    });
})