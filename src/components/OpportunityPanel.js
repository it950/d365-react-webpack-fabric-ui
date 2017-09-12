import React, { Component } from 'react'
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel'

class OpportunityPanel extends Component {
  render() {
    const { isOpen, onClosePanel } = this.props

    return (
      <div>
        <Panel
          isOpen={isOpen}
          type={PanelType.smallFixedFar}
          onDismiss={onClosePanel}
          headerText="Opportunity Panel"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={() => {
            return (
              <div>
                <PrimaryButton
                  onClick={onClosePanel}
                  style={{ marginRight: '8px' }}
                >
                  Save
                </PrimaryButton>
                <DefaultButton onClick={onClosePanel}>Cancel</DefaultButton>
              </div>
            )
          }}
        >
          <ChoiceGroup
            options={[
              {
                key: 'A',
                text: 'Option A',
              },
              {
                key: 'B',
                text: 'Option B',
                checked: true,
              },
              {
                key: 'C',
                text: 'Option C',
                disabled: true,
              },
              {
                key: 'D',
                text: 'Option D',
                checked: true,
                disabled: true,
              },
            ]}
            label="Pick one"
            required={true}
          />
        </Panel>
      </div>
    )
  }
}

export default OpportunityPanel
