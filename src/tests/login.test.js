import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from '../components/login';

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        shallow(<LoginForm />);
    });
})