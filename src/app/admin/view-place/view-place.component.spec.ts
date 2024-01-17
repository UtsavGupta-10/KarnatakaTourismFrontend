import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaceComponent } from './view-place.component';

describe('ViewPlaceComponent', () => {
  let component: ViewPlaceComponent;
  let fixture: ComponentFixture<ViewPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlaceComponent]
    });
    fixture = TestBed.createComponent(ViewPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
