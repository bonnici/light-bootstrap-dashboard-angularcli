/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavbarTitleService } from './navbar-title.service';

describe('NavbarTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarTitleService]
    });
  });

  it('should ...', inject([NavbarTitleService], (service: NavbarTitleService) => {
    expect(service).toBeTruthy();
  }));
});
