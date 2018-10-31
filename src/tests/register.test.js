import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from '../components/register';

describe('<RegistrationForm />', () => {
    it('renders without crashing', () => {
        shallow(<RegistrationForm />);
    });
})