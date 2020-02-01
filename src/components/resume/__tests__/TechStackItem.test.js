import React from 'react';
import { shallow } from 'enzyme';
import TechStackItem from '../TechStackItem';

describe('TechStackItem Component', () => {
  it('can render a TechStackItem', () => {
    const wrapper = shallow(<TechStackItem item={'im an item'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
