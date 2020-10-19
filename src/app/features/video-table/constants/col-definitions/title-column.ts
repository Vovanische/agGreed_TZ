import { ColDef } from 'ag-grid-community';
import { VideoTitleComponent } from '../../components/cell-renderers/video-title/video-title.component';

export const TitleCol: ColDef = {
  headerName: 'Video Title',
  field: 'title',
  colId: 'title',
  maxWidth: 200,
  cellRendererFramework: VideoTitleComponent
};
