import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWrapperComponent } from './upload-wrapper.component';

describe('UploadWrapperComponent', () => {
  let component: UploadWrapperComponent;
  let fixture: ComponentFixture<UploadWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
