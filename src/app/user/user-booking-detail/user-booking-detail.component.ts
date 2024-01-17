import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-booking-detail',
  templateUrl: './user-booking-detail.component.html',
  styleUrls: ['./user-booking-detail.component.css']
})
export class UserBookingDetailComponent implements OnInit{

      placeId:string;
      place:any;

      constructor(private activatedRoute:ActivatedRoute,
        private userService:UserService){

      }

      ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
          this.placeId = params['placeId'];
        });
          
         this.fetchPlace();
      }

      fetchPlace() {
        this.userService.getPlaceById(parseInt(this.placeId)).subscribe(data=>{
           this.place=data
           console.log("data ",data)
        })
      }
  
}
