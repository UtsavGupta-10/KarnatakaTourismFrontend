import { Component, Input } from '@angular/core';
import { Place } from 'src/app/modal/place';

@Component({
  selector: 'app-view-place-card',
  templateUrl: './view-place-card.component.html',
  styleUrls: ['./view-place-card.component.css']
})
export class ViewPlaceCardComponent {
      @Input() place:Place={
        id:0,
        name: '',
        image: '',
        distance: 0,
        description: '',
        tag:''
      };

      

}
