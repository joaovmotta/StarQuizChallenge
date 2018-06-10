import { TestBed, inject } from '@angular/core/testing';

import { GoogleImageService } from './google-image.service';

describe('GoogleImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleImageService]
    });
  });

  it('should be created', inject([GoogleImageService], (service: GoogleImageService) => {
    expect(service).toBeTruthy();
  }));
});
