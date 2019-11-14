import { TestBed } from '@angular/core/testing';

import { AssigneeCalendarService } from './assignee-calendar.service';

describe('AssigneeCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssigneeCalendarService = TestBed.get(AssigneeCalendarService);
    expect(service).toBeTruthy();
  });
});
