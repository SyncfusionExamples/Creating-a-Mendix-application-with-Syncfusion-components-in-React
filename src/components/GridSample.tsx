import { Component, ReactNode, createElement } from "react";
import './GridSample.css';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';


export class GridSample extends Component {
    render(): ReactNode {
        return (
            <div>
                <h2>Grid</h2>
                <GridComponent dataSource={data}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                        <ColumnDirective field='CustomerID' width='100'/>
                        <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                        <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                        <ColumnDirective field='ShipCountry' width='100'/>
                    </ColumnsDirective>
                </GridComponent>
            </div>
        );
    }
}
