/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ContactFormService } from './contact-form.service';

describe('Service: ContactForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactFormService]
    });
  });

  it('should ...', inject([ContactFormService], (service: ContactFormService) => {
    expect(service).toBeTruthy();
  }));
});
