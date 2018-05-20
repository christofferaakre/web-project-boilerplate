import React from 'react';
import { shallow, } from 'enzyme';
import { Loading, } from '../Loading';

let props;

beforeEach(() => {
  props = {};
});

describe('Loading', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Loading {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
