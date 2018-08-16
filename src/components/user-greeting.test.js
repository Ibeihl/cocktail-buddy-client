import React from 'react';
import {shallow} from 'enzyme';

import {UserGreeting} from './user-greeting';

describe('<UserGreeting />', () => {
    it('renders without crashing', () => {
        const user = "Bob";
        shallow(<UserGreeting user={user}/>);
    });
})