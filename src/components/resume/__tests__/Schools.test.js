import React from 'react';
import { shallow } from 'enzyme';
import data from '../../../resume.json';
import Schools from '../Schools';

describe('Schools Component', () => {
  it('can render Schools', () => {
    const wrapper = shallow(<Schools {...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
