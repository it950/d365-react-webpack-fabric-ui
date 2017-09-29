import React from 'react'
import { shallow } from 'enzyme'

import OpportunityListItem from '../OpportunityListItem'
import opportunities from '../../fixtures/opportunities.js'

describe('OpportunityListItem', () => {
  it('should render correctly', () => {
    const props = { opportunity: opportunities[0] }
    const wrapper = shallow(<OpportunityListItem {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
