import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeighlossPage } from './weighloss.page';

describe('WeighlossPage', () => {
  let component: WeighlossPage;
  let fixture: ComponentFixture<WeighlossPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighlossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
