import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaceCardComponent } from './view-place-card.component';

describe('ViewPlaceCardComponent', () => {
  let component: ViewPlaceCardComponent;
  let fixture: ComponentFixture<ViewPlaceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlaceCardComponent]
    });
    fixture = TestBed.createComponent(ViewPlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
