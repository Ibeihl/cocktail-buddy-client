import React from 'react';
import {shallow} from 'enzyme';

import {DrinkList} from './drink-list';

describe('<DrinkList />', () => {
    it('renders without crashing', () => {
        shallow(<DrinkList />);
    });
})