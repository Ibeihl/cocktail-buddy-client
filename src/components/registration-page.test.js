import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationPage} from './registration-page';

describe('<RegistrationPage />', () => {
    it('renders without crashing', () => {
        shallow(<RegistrationPage />);
    });
})