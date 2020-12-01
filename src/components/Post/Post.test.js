import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Post from './Post'

configure({adapter: new Adapter()})

describe('<Post />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Post title='1'/>)
  })

  it('should return a list element with a title', () => {
    const title = '1'
    expect(wrapper.find('li')).toHaveLength(1)
    expect(wrapper.contains(title)).toEqual(true)
  })
})