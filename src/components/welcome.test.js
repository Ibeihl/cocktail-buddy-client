import React from 'react';
import {shallow} from 'enzyme';

import {Welcome} from './welcome';

describe('<Welcome />', () => {
    it('renders without crashing', () => {
        shallow(<Welcome />);
    });
})