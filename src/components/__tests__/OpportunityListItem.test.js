import React from 'react'
import { shallow } from 'enzyme'

import OpportunityListItem from '../OpportunityListItem'

describe('OpportunityListItem', () => {
  it('should render correctly', () => {
    const props = { opportunity: { name: 'Test', createdon: 0 } }
    const wrapper = shallow(<OpportunityListItem {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
