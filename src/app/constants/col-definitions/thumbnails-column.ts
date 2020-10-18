import { ImageThumbnailsComponent } from '../../components/cell-renderers/image-thumbnails/image-thumbnails.component';
import { ColDef } from 'ag-grid-community';

export const ThumbnailsCol: ColDef = {
  headerName: '',
  field: 'thumbnails',
  maxWidth: 120,
  sortable: false,
  cellRendererFramework: ImageThumbnailsComponent
};
