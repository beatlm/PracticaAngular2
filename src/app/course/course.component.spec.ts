import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { coursesComponent } from './courses.component';

describe('coursesComponent', () => {
  let component: coursesComponent;
  let fixture: ComponentFixture<coursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ coursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
