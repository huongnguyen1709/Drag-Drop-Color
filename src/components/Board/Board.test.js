import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Board', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Board debug />);

        expect(component).toMatchSnapshot();
    });
});