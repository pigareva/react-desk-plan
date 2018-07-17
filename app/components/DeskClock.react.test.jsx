import React from 'react';
import { shallow } from 'enzyme';
import Clock from './Clock';
import DeskClock from './DeskClock';

jest.mock('./Clock', () => 'Clock');

test('DeskClock calls startTime() after the component did mount', () => {
  const wrapper = shallow(<DeskClock time={0} />);
  const instance = wrapper.instance();
  jest.spyOn(instance, 'startTime');
  expect(instance.startTime).toHaveBeenCalledTimes(1);
});

test('DeskClock calls stopTime() before the component unmount', () => {
  const wrapper = shallow(<DeskClock time={0} />);
  const instance = wrapper.instance();
  jest.spyOn(instance, 'stopTime');
  instance.componentDidMount();
  expect(instance.stopTime).toHaveBeenCalledTimes(1);
});
