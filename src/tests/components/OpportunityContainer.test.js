import React from 'react'
import { shallow } from 'enzyme'

import OpportunityContainer from '../../components/OpportunityContainer'

describe('OpportunityContainer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<OpportunityContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
