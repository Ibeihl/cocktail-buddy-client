import React from 'react';
import {shallow} from 'enzyme';

import {Input} from '../components/input';

describe('<Input />', () => {
    it('renders without crashing', () => {
        shallow(<Input />);
    });
})