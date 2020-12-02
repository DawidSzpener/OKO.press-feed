import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FeedList from './FeedList'

configure({adapter: new Adapter()})

describe('<FeedList />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<FeedList />)
  })

  it('should render a list', () => {
    expect(wrapper.text()).toContain('List')
    expect(wrapper.find('ul')).toHaveLength(1)
  })
})