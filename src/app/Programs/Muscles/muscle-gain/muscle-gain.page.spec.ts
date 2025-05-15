import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuscleGainPage } from './muscle-gain.page';

describe('MuscleGainPage', () => {
  let component: MuscleGainPage;
  let fixture: ComponentFixture<MuscleGainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
