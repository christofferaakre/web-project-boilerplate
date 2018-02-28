import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

test('Loading component renders correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
});
