import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from './register';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
        shallow(<RegistrationForm />);
    });
})