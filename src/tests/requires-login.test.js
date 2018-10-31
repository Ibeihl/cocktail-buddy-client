import React from 'react';
import {shallow} from 'enzyme';

import {RequiresLogin} from '../components/requires-login';

describe('<RequiresLogin />', () => {
    it('renders without crashing', () => {
        shallow(<RequiresLogin />);
    });
})