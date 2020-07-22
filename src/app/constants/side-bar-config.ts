import { SideBarDef } from 'ag-grid-community';
import { SelectionToolPanelComponent } from '../components/tool-panels/selection-tool-panel/selection-tool-panel.component';

export const SideBar: SideBarDef = {
  toolPanels: [
    {
      id: 'selection',
      labelDefault: 'Selection',
      labelKey: 'selection',
      iconKey: 'selection',
      toolPanelFramework: SelectionToolPanelComponent
    }
  ]
};
