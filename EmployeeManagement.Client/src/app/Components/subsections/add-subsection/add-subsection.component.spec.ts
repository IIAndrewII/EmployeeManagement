import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubsectionComponent } from './add-subsection.component';

describe('AddSubsectionComponent', () => {
  let component: AddSubsectionComponent;
  let fixture: ComponentFixture<AddSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
