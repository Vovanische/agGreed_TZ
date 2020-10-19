import { CheckboxHeaderComponent } from '../../components/headers/checkbox-header/checkbox-header.component';
import { CheckboxCellComponent } from '../../components/cell-renderers/checkbox-cell/checkbox-cell.component';
import { ColDef } from 'ag-grid-community';

export const CheckboxCol: ColDef = {
  field: 'checkbox',
  headerComponentFramework: CheckboxHeaderComponent,
  colId: 'checkbox',
  sortable: false,
  maxWidth: 40,
  hide: false,
  cellRendererFramework: CheckboxCellComponent
};
