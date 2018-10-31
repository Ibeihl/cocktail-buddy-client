import React from 'react';
import {shallow} from 'enzyme';

import {Welcome} from '../components/welcome';

describe('<Welcome />', () => {
    it('renders without crashing', () => {
        shallow(<Welcome />);
    });
})