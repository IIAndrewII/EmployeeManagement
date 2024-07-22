import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubsectionComponent } from './about-subsection.component';

describe('AboutSubsectionComponent', () => {
  let component: AboutSubsectionComponent;
  let fixture: ComponentFixture<AboutSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSubsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
