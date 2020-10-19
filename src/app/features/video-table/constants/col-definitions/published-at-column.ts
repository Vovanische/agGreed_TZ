import { ColDef } from 'ag-grid-community';
import { PublishedDateComponent } from '../../components/cell-renderers/published-date/published-date.component';

export const PublishedAtCol: ColDef = {
  headerName: 'Published on',
  field: 'publishedAt',
  enableValue: true,
  maxWidth: 180,
  cellRendererFramework: PublishedDateComponent
};
