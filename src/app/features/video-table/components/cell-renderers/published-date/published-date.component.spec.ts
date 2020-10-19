import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedDateComponent } from './published-date.component';

describe('PublishedDateComponent', () => {
  let component: PublishedDateComponent;
  let fixture: ComponentFixture<PublishedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
