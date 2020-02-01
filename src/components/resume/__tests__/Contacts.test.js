import React from 'react';
import { shallow } from 'enzyme';
import Contacts from '../Contacts';
import data from '../../../resume.json';

describe('Contacts Component', () => {
  it('can render Contacts', () => {
    const wrapper = shallow(<Contacts {...data.contacts}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
