import { TestBed } from '@angular/core/testing';

import { StudActivityService } from './stud-activity.service';

describe('StudActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudActivityService = TestBed.get(StudActivityService);
    expect(service).toBeTruthy();
  });
});
