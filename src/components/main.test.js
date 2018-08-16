import React from 'react';
import {shallow, mount} from 'enzyme';

import {Main} from './main';

describe('<Main />', () => {
    it('renders without crashing', () => {
        mount(<Main />);
    });
})