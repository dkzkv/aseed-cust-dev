import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpWrapperComponent } from './sign-up-wrapper.component';

describe('SignUpWrapperComponent', () => {
  let component: SignUpWrapperComponent;
  let fixture: ComponentFixture<SignUpWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
