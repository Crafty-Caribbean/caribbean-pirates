import React from 'react';
import { mount } from 'enzyme';
import PatternCard from '.';

it('should exist', () => {
  const wrapper = mount(<PatternCard />);
  expect(wrapper.exists()).toBe(true);
});
