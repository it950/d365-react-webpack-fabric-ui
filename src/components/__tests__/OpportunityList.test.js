import React from 'react'
import { shallow } from 'enzyme'

import OpportunityList from '../OpportunityList'
import opportunities from '../../fixtures/opportunities.js'

describe('OpportunityList', () => {
  it('should render correctly with no opportunities', () => {
    const wrapper = shallow(<OpportunityList />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly with opportunities', () => {
    const wrapper = shallow(<OpportunityList opportunities={opportunities} />)
    expect(wrapper).toMatchSnapshot()
  })
})
