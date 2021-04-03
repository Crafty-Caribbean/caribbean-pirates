import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

it('should exist', () => {
  const wrapper = mount(<Header />);
  expect(wrapper.exists()).toBe(true);
});
