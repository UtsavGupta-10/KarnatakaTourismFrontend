import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modal/place';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent implements OnInit {
  placeList: Place[] = []; // Assuming Place is the interface or class representing a tourist place

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    // Subscribe to the observable returned by getPlace
    this.adminService.getPlace().subscribe(
      (data: Place[]) => { // Expecting an array of Place objects
        console.log('placeList', data);
        this.placeList = data; // Assign the data to placeList
      },
      (error) => {
        console.error('Error fetching place data:', error);
        // Handle error (e.g., display a user-friendly message)
      }
    );
  }
}
