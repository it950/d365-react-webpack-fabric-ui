import React from 'react'

import OpportunityListItem from './OpportunityListItem'

const OpportunityList = ({ opportunities }) => (
  <ul>
    {opportunities.map(o => (
      <OpportunityListItem key={o.opportunityid} opportunity={o} />
    ))}
  </ul>
)

export default OpportunityList
