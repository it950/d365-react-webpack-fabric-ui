import React from 'react'
import { shallow } from 'enzyme'

import OpportunityContainer from '../OpportunityContainer'
import opportunities from '../../fixtures/opportunities.js'

describe('OpportunityContainer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<OpportunityContainer />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle handleClosePanel', async () => {
    const handleClosePanel = jest.fn()
    wrapper.setState({ flag: false })
    console.log(wrapper.debug())
    wrapper.find('OpportunityPanel').prop('onClosePanel')()
    expect(handleClosePanel).toHaveBeenCalled()
  })

  // it('should handle handleShowPanel', () => {
  //   const handleShowPanel = jest.fn()
  //   wrapper.setState({ opportunities })
  //   wrapper.find('DefaultButton').simulate('click')
  //   expect(handleShowPanel).toHaveBeenCalled()
  // })
})
