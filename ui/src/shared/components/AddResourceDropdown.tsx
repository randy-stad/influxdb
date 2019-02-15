// Libraries
import React, {PureComponent} from 'react'
import _ from 'lodash'

// Components
import {Dropdown, DropdownMode} from 'src/clockface'

// Types
import {IconFont, ComponentColor, ComponentSize} from '@influxdata/clockface'

interface Props {
  onSelectNew: () => void
  onSelectImport: () => void
  resource: string
}

export default class CreateDashboardDropdown extends PureComponent<Props> {
  public render() {
    return (
      <Dropdown
        mode={DropdownMode.ActionList}
        titleText={`Create ${this.props.resource}`}
        icon={IconFont.Plus}
        buttonColor={ComponentColor.Primary}
        buttonSize={ComponentSize.Small}
        widthPixels={200}
        onChange={this.handleSelect}
      >
        {this.optionItems}
      </Dropdown>
    )
  }

  private get optionItems(): JSX.Element[] {
    return [
      <Dropdown.Item
        id={this.newOption}
        key={this.newOption}
        value={this.newOption}
      >
        {this.newOption}
      </Dropdown.Item>,
      <Dropdown.Item
        id={this.importOption}
        key={this.importOption}
        value={this.importOption}
      >
        {this.importOption}
      </Dropdown.Item>,
    ]
  }

  private get newOption(): string {
    return `New ${this.props.resource}`
  }

  private get importOption(): string {
    return `Import ${this.props.resource}`
  }

  private handleSelect = (selection: string): void => {
    const {onSelectNew, onSelectImport} = this.props
    switch (selection) {
      case this.newOption:
        onSelectNew()
      case this.importOption:
        onSelectImport()
    }
  }
}
