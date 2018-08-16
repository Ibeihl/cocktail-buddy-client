import React from 'react';
import {shallow} from 'enzyme';

import {AddDrinkBtn} from './add-drink-btn';

describe('<AddDrinkBtn />', () => {
    it('renders without crashing', () => {
        shallow(<AddDrinkBtn />);
    });
})