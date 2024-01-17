import { Component, Input } from '@angular/core';
import { Place } from 'src/app/modal/place';

@Component({
  selector: 'app-user-place-card',
  templateUrl: './user-place-card.component.html',
  styleUrls: ['./user-place-card.component.css']
})
export class UserPlaceCardComponent {
      @Input() place:Place;
}
