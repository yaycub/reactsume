import React from 'react';
import { shallow } from 'enzyme';
import data from '../../../resume.json';
import WorkItem from '../WorkItem.js';

describe('WorkItem Component', () => {
  it('can render a WorkItem', () => {
    const { work } = data;
    const wrapper = shallow(<WorkItem {...work[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
