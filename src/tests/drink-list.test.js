import React from 'react';
import {shallow} from 'enzyme';

import {DrinkList} from '../components/drink-list';

describe('<DrinkList />', () => {
    it('renders without crashing', () => {
        shallow(<DrinkList />);
    });
})