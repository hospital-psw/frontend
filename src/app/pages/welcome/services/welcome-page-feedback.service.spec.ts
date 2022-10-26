import { TestBed } from '@angular/core/testing';

import { WelcomePageFeedbackService } from './welcome-page-feedback.service';

describe('WelcomePageFeedbackService', () => {
  let service: WelcomePageFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomePageFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
