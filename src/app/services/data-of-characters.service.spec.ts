import { TestBed } from '@angular/core/testing';

import { DataOfCharactersService } from './data-of-characters.service';

describe('DataOfCharactersService', () => {
  let service: DataOfCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOfCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
