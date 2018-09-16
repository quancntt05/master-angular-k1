import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckBoxComponent } from './demo-check-box.component';

describe('DemoCheckBoxComponent', () => {
  let component: DemoCheckBoxComponent;
  let fixture: ComponentFixture<DemoCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
