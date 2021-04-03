import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

it('should exist', () => {
  const wrapper = mount(<Header />);
  expect(wrapper.exists()).toBe(true);
});
