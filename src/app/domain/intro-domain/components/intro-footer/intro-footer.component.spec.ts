import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFooterComponent } from './intro-footer.component';

describe('IntroFooterComponent', () => {
  let component: IntroFooterComponent;
  let fixture: ComponentFixture<IntroFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
