import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBodyComponent } from './intro-body.component';

describe('IntroBodyComponent', () => {
  let component: IntroBodyComponent;
  let fixture: ComponentFixture<IntroBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
