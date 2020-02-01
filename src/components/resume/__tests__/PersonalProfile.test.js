import React from 'react';
import { shallow } from 'enzyme';
import PersonalProfile from '../PersonalProfile';

describe('PersonalProfile Component', () => {
  it('can render a PersonalProfile', () => {
    const wrapper = shallow(<PersonalProfile personalProfile={'This is my profile'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
