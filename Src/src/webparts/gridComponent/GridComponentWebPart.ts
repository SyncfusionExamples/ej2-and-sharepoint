import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './GridComponentWebPart.module.scss';
import * as strings from 'GridComponentWebPartStrings';

// add Syncfusion Essential JS 2 style reference from node_modules
require('../../../node_modules/@syncfusion/ej2/fabric.css');


// import Essential JS 2 Grid
import { Grid } from '@syncfusion/ej2-grids';


export interface IGridComponentWebPartProps {
  description: string;
}

export default class GridComponentWebPart extends BaseClientSideWebPart <IGridComponentWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.gridComponent }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Welcome to SharePoint!</span>
  <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
		  <!--HTML DIV element, which is going to render as Essential JS 2 Grid-->
		  <div id="Grid"> </div>
          </div>
          </div>
          </div>
          </div>`;
		  
let data: Object[] = [
    {
        OrderID: 10248, ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims'
    },
    {
        OrderID: 10249, ShipName: 'Toms Spezialitäten', ShipCity: 'Münster'
    },
    {
        OrderID: 10250, ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro'
    }]
	
	let grid: Grid = new Grid({
    dataSource: data});
    grid.appendTo('#Grid');
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
              })
            ]
          }
        ]
      }
    ]
  };
}
}
