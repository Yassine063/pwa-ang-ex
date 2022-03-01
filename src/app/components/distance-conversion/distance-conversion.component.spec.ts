import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceConversionComponent } from './distance-conversion.component';

describe('DistanceConversionComponent', () => {
  let component: DistanceConversionComponent;
  let fixture: ComponentFixture<DistanceConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
