import React from 'react';
import { shallow, } from 'enzyme';
import { App, } from '../App';

let props;

beforeEach(() => {
  props = {};
});

describe('App', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<App {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
