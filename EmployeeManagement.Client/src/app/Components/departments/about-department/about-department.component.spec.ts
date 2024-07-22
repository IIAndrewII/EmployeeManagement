import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDepartmentComponent } from './about-department.component';

describe('AboutDepartmentComponent', () => {
  let component: AboutDepartmentComponent;
  let fixture: ComponentFixture<AboutDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
