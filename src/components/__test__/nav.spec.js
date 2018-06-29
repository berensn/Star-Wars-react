import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../nav.js';
import Category from '../category';
import { Route } from 'react-router-dom';
import { NavLinq } from '../../styles/nav.style';

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

  it('should match rendered link format', () => {
    const tree = renderer
      .create(
      <MemoryRouter>
        <NavLinq to='/component/people'>People</NavLinq>
      </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the correct route format', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Route path='category/:name' component={Category} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});