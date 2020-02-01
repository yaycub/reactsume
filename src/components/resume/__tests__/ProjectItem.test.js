import React from 'react';
import { shallow } from 'enzyme';
import ProjectItem from '../ProjectItem';

describe('ProjectItem component', () => {
  it('can render a ProjectItem', () => {
    const wrapper = shallow(<ProjectItem title="my title" tech="some tech" description="this is a project" />);
    expect(wrapper).toMatchSnapshot();
  });
});
