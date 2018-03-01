import { TestBed, inject } from '@angular/core/testing';

import { ConsoleLoggerServiceService } from './console-logger-service.service';

describe('ConsoleLoggerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleLoggerServiceService]
    });
  });

  it('should be created', inject([ConsoleLoggerServiceService], (service: ConsoleLoggerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
