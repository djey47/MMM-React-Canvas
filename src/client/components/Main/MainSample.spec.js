import React from 'react';
import renderer from 'react-test-renderer';
import MainSample from './MainSample';

describe('Main sample component', () => {
  it('should render correctly at initial state', () => {
    // given-when
    const component = renderer.create(
      <MainSample />,
    );

    // then
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
