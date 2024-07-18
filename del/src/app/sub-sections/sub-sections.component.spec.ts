import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSectionsComponent } from './sub-sections.component';

describe('SubSectionsComponent', () => {
  let component: SubSectionsComponent;
  let fixture: ComponentFixture<SubSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
