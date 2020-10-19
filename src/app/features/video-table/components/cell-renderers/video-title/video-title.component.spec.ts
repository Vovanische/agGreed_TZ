import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTitleComponent } from './video-title.component';
import { ICellRendererParams } from 'ag-grid-community';

describe('VideoTitleComponent', () => {
  let component: VideoTitleComponent;
  let fixture: ComponentFixture<VideoTitleComponent>;
  const params = { value: 'title' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoTitleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('videoTitleLink should be falsy before changes', () => {
    expect(component.videoTitleLink).toBeFalsy();
  });

  it('videoTitleLink() should return value', () => {
    component.agInit(params as unknown as ICellRendererParams);
    expect(component.videoTitleLink).toEqual(params.value);
  });
});
