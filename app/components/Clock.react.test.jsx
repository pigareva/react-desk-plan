import React from 'react';
import renderer from 'react-test-renderer';
import Clock from './Clock';

jest.mock('./Greeting', () => 'Greeting');

test('Clock displays the time and the greeting', () => {
  const component = renderer.create(<Clock time={65} isGreetingNeeded />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

