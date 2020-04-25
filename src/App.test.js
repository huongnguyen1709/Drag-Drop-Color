import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<App />, div)
})

it('shallow renders without crashing', () => {
    shallow(<App />)
})