import React from 'react';
import {shallow} from 'enzyme';

import {Dropdown} from '../components/dropdown';

describe('<Dropdown />', () => {
    it('renders without crashing', () => {
        shallow(<Dropdown />);
    });
})