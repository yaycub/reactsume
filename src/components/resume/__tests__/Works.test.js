import React from 'react';
import { shallow } from 'enzyme';
import data from '../../../resume.json';
import Works from '../Works.js';

describe('Works Component', () => {
  it('can render Works', () => {
    const wrapper = shallow(<Works {...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
