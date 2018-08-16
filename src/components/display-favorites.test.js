import React from 'react';
import {shallow} from 'enzyme';

import {DisplayFavorites} from './display-favorites';

describe('<DisplayFavorites />', () => {
    it('renders without crashing', () => {
        shallow(<DisplayFavorites />);
    });
})