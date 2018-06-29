import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Nav from '../nav.js';


describe('<Nav/>', () => {
  it('should render seven links', () => {
    const wrapper = shallow(
        <Nav/>,    
    );
    console.log(wrapper.debug());
    expect(wrapper.find('Styled(NavLink)')).to.have.length(7);
  });
});
