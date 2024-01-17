import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaceCardComponent } from './user-place-card.component';

describe('UserPlaceCardComponent', () => {
  let component: UserPlaceCardComponent;
  let fixture: ComponentFixture<UserPlaceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPlaceCardComponent]
    });
    fixture = TestBed.createComponent(UserPlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
