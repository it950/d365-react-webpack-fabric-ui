import React, { Component } from 'react'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner'

import OpportunityList from './OpportunityList'
import OpportunityPanel from './OpportunityPanel'

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
    // fetch(url, {
    //   credentials: 'same-origin',
    // })
    //   .then(res => res.json())
    //   .then(json => this.setState({ opportunities: json.value }))

    const opportunities = [
      {
        opportunityid: 1001,
        name: 'Big Sale',
        createdon: Date.now().toLocaleString(),
      },
      {
        opportunityid: 1002,
        name: '2018 Restocking',
        createdon: Date.now().toLocaleString(),
      },
      {
        opportunityid: 1003,
        name: '2017 Q4 Reorder',
        createdon: Date.now().toLocaleString(),
      },
      {
        opportunityid: 1004,
        name: 'End-of-Year Firesale',
        createdon: Date.now().toLocaleString(),
      },
    ]

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
