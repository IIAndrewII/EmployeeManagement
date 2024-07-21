import { TestBed } from '@angular/core/testing';

import { SubSectionService } from './subsection.service';

describe('SubsectionService', () => {
  let service: SubSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
