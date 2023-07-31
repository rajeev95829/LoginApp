import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEmailComponent } from './validate-email.component';

describe('ValidateEmailComponent', () => {
  let component: ValidateEmailComponent;
  let fixture: ComponentFixture<ValidateEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateEmailComponent]
    });
    fixture = TestBed.createComponent(ValidateEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
