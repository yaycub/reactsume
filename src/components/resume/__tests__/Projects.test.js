import React from 'react';
import { shallow } from 'enzyme';
import data from '../../../resume.json';
import Projects from '../Projects.js';

describe('Projects Component', () => {
  it('can render Projects', () => {
    const wrapper = shallow(<Projects {...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
