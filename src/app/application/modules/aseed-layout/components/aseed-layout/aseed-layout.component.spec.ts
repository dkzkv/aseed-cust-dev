import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseedLayoutComponent } from './aseed-layout.component';

describe('AseedLayoutComponent', () => {
  let component: AseedLayoutComponent;
  let fixture: ComponentFixture<AseedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AseedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AseedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
