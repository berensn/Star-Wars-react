import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../nav.js';

describe('<Nav />', () => {
  it('should include the correct links', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Nav />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
