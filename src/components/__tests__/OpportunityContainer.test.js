import React from 'react'
import { shallow } from 'enzyme'

import OpportunityContainer from '../OpportunityContainer'

describe('OpportunityContainer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<OpportunityContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
