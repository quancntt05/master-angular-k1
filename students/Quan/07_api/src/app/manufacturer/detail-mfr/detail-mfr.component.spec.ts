import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMfrComponent } from './detail-mfr.component';

describe('DetailMfrComponent', () => {
  let component: DetailMfrComponent;
  let fixture: ComponentFixture<DetailMfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
