import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';

test('Greeting changes the text depending on time', () => {
  const componentMorning = renderer.create(<Greeting time={485} />);
  let tree = componentMorning.toJSON();
  expect(tree).toMatchSnapshot();

  const componentLunch = renderer.create(<Greeting time={780} />);
  tree = componentLunch.toJSON();
  expect(tree).toMatchSnapshot();

  const componentByeBye = renderer.create(<Greeting time={1080} />);
  tree = componentByeBye.toJSON();
  expect(tree).toMatchSnapshot();
});
