import React from 'react'
import { shallow } from 'enzyme'

import OpportunityList from '../../components/OpportunityList'

describe('OpportunityList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<OpportunityList />)
    expect(wrapper).toMatchSnapshot()
  })
})
