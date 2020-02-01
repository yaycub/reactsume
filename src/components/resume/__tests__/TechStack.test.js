import React from 'react';
import { shallow } from 'enzyme';
import data from '../../../resume.json';
import TechStack from '../TechStack.js';

describe('TechStack component', () => {
  it('can render a TechStack', () => {
    const { techStack } = data;
    const wrapper = shallow(<TechStack {...techStack} />);
    expect(wrapper).toMatchSnapshot();
  });
});
