import {
  renderWrapper,
  renderMainComponent,
} from './renderer.js';

describe('renderWrapper function', () => {
  it('should return correct HTML', () => {
    // given-when
    const actual = renderWrapper('IDWrapper');
    // then
    expect(actual).toMatchSnapshot();
  });
});

describe('renderMainComponent function', () => {
  it('should render correctly', () => {
    // given
    const wrapperId = 'IDWrapper';
    document.write(`<div id='${wrapperId}' />`);

    // when
    const rendered = renderMainComponent(wrapperId);

    // then
    expect(rendered).not.toBeUndefined();
  });
});
