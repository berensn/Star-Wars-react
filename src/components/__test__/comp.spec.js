import React from 'react';
import { MemoryRouter, Route, Switch, NavLink } from 'react-router-dom';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import Nav from '../nav';
import NavLinq from '../../styles/nav.style';
import Main from '../main';


describe('<Nav/>', () => {
  it('should render seven links', () => {
    const wrapper = shallow(
        <Nav/>,    
    );
    console.log(wrapper.debug());
    expect(wrapper.find('Styled(NavLink)')).to.have.length(1);
  });
});
