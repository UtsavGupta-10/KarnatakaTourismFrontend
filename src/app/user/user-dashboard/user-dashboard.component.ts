// import { Component, OnInit } from '@angular/core';
// import { Place } from 'src/app/modal/place';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/authentication/auth.service';

// @Component({
//   selector: 'app-user-dashboard',
//   templateUrl: './user-dashboard.component.html',
//   styleUrls: ['./user-dashboard.component.css']
// })
// export class UserDashboardComponent implements OnInit{

//         placeList:Place[]=[]
//         preferenceList:any[]=[]
//         formData={
//           startDate:'',endDate:'',preference:''
//         }
//        constructor(private userService:UserService,
//         private router:Router,private authService:AuthService){

//        }
       

//        ngOnInit(): void {
       
//         this.getTagsFromPlace();
//         // console.log("preferenceList: ", this.preferenceList);
//         console.log("authenticated ", this.authService.isAuthenticatedUser());
         
//        }

//       getTagsFromPlace() {
//          this.userService.getAllTags().subscribe(data=>{
//           this.preferenceList=data
//          })
//       }


//      onSubmit() {
//   console.log("formdata", this.formData);
//   this.userService.getPlacesByTag(this.formData.preference).subscribe(
//     data => {
//       console.log("Return *** data", data);
//       this.router.navigate(['user/booking/', this.formData.preference]);
//     },
//     error => {
//       console.error("Error:", error);
//       // Handle the error here, display a message, or perform any necessary actions.
//     }
//   );
// }


//       onPreferenceChange() {
//         console.log('Selected preference:', this.formData.preference);
//       }

      
     

//       logOut() {
//         this.authService.logout();
//         this.router.navigate(['/']);
//       }
// }



import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modal/place';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  placeList: Place[] = [];
  preferenceList: any[] = [];
  formData = {
    startDate: new Date().toISOString().split('T')[0], 
    // startDate: '',
    endDate: '',
    preference: ''
  };

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getTagsFromPlace();
    console.log("preferenceList: ", this.preferenceList);
    console.log("authenticated ", this.authService.isAuthenticatedUser());
  }

  getTagsFromPlace() {
    this.userService.getAllTags().subscribe(data => {
      this.preferenceList = data;
      console.log("data userdashboard",data);
    });
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  onSubmit() {
    console.log("formdata", this.formData);
    this.userService.getPlacesByTag(this.formData.preference).subscribe(
      data => {
        console.log("Return *** data", data);
        this.router.navigate(['user/booking/', this.formData.preference]);
      },
      error => {
        console.error("Error:", error);
        // Handle the error here, display a message, or perform any necessary actions.
      }
    );
  }

  onPreferenceChange() {
    console.log('Selected preference:', this.formData.preference);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
