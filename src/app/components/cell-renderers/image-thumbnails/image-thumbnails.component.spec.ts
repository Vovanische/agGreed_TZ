import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageThumbnailsComponent } from './image-thumbnails.component';
import { ICellRendererParams } from 'ag-grid-community';

describe('ImageThumbnailsComponent', () => {
  let component: ImageThumbnailsComponent;
  let fixture: ComponentFixture<ImageThumbnailsComponent>;
  const params = { value: 'image' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageThumbnailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('imageSource should be falsy before changes', () => {
    expect(component.imageSource).toBeFalsy();
  });

  it('imageSource() should return correct value', () => {
    component.agInit(params as unknown as ICellRendererParams);
    expect(component.imageSource).toEqual(params.value);
  });
});
