import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header Component', () =>{
  it('can render a header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
