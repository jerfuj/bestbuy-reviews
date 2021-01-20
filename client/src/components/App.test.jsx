import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

// testing to see if testing works test
describe('<App />', () => {
  it('should render component which says hello world my dude.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain('Hello World my dude');
  });
});
