import React from 'react'

const OpportunityListItem = ({ opportunity }) => {
  /*eslint no-undef: 0*/
  // const url = Xrm.Page.context.prependOrgName(
  //   `/main.aspx?pagetype=entityrecord&etn=opportunity&id=${opportunity.opportunityid}`,
  // )
  return (
    <li>
      <p>
        <a href="#" target="_blank">
          {opportunity.name}
        </a>
      </p>
      <p>Created On {opportunity.createdon}</p>
    </li>
  )
}

export default OpportunityListItem
