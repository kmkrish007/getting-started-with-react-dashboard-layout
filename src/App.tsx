import { DashboardLayoutComponent,PanelDirective,  PanelsDirective,  } from "@syncfusion/ej2-react-layouts";
import * as React from 'react';


export default class App extends React.Component<{}, {}>{
    constructor(props: any) {
        super(props);
    }
      
    public render() {
        return (<div className="dash-container">
                <DashboardLayoutComponent id="defaultLayout" columns={6} allowResizing={true}>
                <PanelsDirective>
                    <PanelDirective header="<div>Panel 1</div>" content="<div></div>" sizeX={2} sizeY={2} row={0} col={0} />
                    <PanelDirective header="<div>Panel 2</div>" content="<div></div>" sizeX={2} sizeY={2} row={0} col={2} />
                    <PanelDirective header="<div>Panel 3</div>" content="<div></div>" sizeX={2} sizeY={2} row={0} col={4} />
                    <PanelDirective header="<div>Panel 4</div>" content="<div></div>" sizeX={4} sizeY={2} row={2} col={0} />
                    <PanelDirective header="<div>Panel 5</div>" content="<div></div>" sizeX={2} sizeY={2} row={2} col={4} />
                </PanelsDirective>
                </DashboardLayoutComponent>
            </div>);
    } 
};