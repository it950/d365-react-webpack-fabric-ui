import React from 'react'
import { shallow } from 'enzyme'

import OpportunityPanel from '../../components/OpportunityPanel'

describe('OpportunityPanel', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<OpportunityPanel />)
    expect(wrapper).toMatchSnapshot()
  })
})
