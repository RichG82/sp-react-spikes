import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'react5Strings';
import React5, { IReact5Props } from './components/React5';
import { IReact5WebPartProps } from './IReact5WebPartProps';

export default class React5WebPart extends BaseClientSideWebPart<IReact5WebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<IReact5Props> = React.createElement(React5, {
      description: this.properties.description,
      counter: this.properties.counter
    });


    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('counter', {
                  label: "Counter"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
