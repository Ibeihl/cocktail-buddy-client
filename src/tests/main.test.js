import React from 'react';
import {shallow, mount} from 'enzyme';

import {Main} from '../components/main';

describe('<Main />', () => {
    it('renders without crashing', () => {
        mount(<Main />);
    });
})