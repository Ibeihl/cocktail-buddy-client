import React from 'react';
import {shallow} from 'enzyme';

import {DrinkForm} from './drink-form';

describe('<DrinkForm />', () => {
    it('renders without crashing', () => {
        shallow(<DrinkForm />);
    });
})