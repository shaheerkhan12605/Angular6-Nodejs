import { TestBed, inject } from '@angular/core/testing';

import { CityBikesService } from './city-bikes.service';

describe('CityBikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityBikesService]
    });
  });

  it('should be created', inject([CityBikesService], (service: CityBikesService) => {
    expect(service).toBeTruthy();
  }));
});
