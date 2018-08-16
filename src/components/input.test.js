import React from 'react';
import {shallow} from 'enzyme';

import {Input} from './input';

describe('<Input />', () => {
    it('renders without crashing', () => {
        shallow(<Input />);
    });
})