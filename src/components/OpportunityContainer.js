import React, { Component } from 'react'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner'

import OpportunityList from './OpportunityList'
import OpportunityPanel from './OpportunityPanel'
import opportunities from '../../db.js'

class App extends Component {
  state = {
    showPanel: false,
    opportunities: [],
  }

  componentDidMount() {
    this.loadOpportunities()
  }

  loadOpportunities() {
    /*eslint no-undef: 0*/
    // const url = Xrm.Page.context.prependOrgName(
    //   '/api/data/v8.0/opportunities?$filter=salesstage eq 0&$orderby=createdon desc' +
    //     '&$top=10' +
    //     '&$select=opportunityid,name,createdon',
    // )

    // const response = fetch(url, {
    //   credentials: 'same-origin',
    // })

    // fetch(url, {
    //   credentials: 'same-origin',
    // })
    //   .then(res => res.json())
    //   .then(json => this.setState({ opportunities: json.value }))

    setTimeout(() => this.setState({ opportunities }), 1000)
  }

  handleClosePanel = () => {
    this.setState({ showPanel: false })
  }

  handleShowPanel = () => {
    this.setState({ showPanel: true })
  }

  render() {
    const { showPanel, opportunities } = this.state
    return (
      <div>
        <h1>Opportunity Summary</h1>
        {opportunities.length > 0 ? (
          <div>
            <OpportunityList opportunities={this.state.opportunities} />
            <DefaultButton
              description="Opens the Panel"
              onClick={this.handleShowPanel}
              text="Open Panel"
            />
            <OpportunityPanel
              isOpen={showPanel}
              onClosePanel={this.handleClosePanel}
            />
          </div>
        ) : (
          <Spinner
            size={SpinnerSize.large}
            label="Loading opportunities..."
            ariaLive="assertive"
          />
        )}
      </div>
    )
  }
}

export default App
