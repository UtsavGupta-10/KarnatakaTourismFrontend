// import { Component } from '@angular/core';
// import { AdminService } from '../admin.service';
// import { Router } from '@angular/router';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-admin-login',
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {
//   model: any = {}; // Declare an object to hold form values
// // email: any;
// // password: any;

//   constructor(private adminService: AdminService, private router: Router) { }

//   onSubmit() {
//     const credentials = {
//       email: this.model.email,
//       password: this.model.password,
//     };
  
//     this.adminService.loginAdmin(credentials).subscribe(
//       (response: any) => {
//         if (response instanceof Object) {
//           console.log('Login successful');
//           this.router.navigate(['/admin/dashboard']);
//         } else if (typeof response === 'string') {
//           console.log(response);
//           this.router.navigate(['/admin/dashboard']);
//         } else {
//           console.error('Unexpected response format:', response);
//         }
//       },
//       (error) => {
//         console.error('Login failed:', error);
  
//         if (error instanceof HttpErrorResponse) {
//           console.log('Status Code:', error.status);
//           console.log('Response Body:', error.error);
  
//           // Example: Display a user-friendly error message based on the server response
//           if (error.status === 400) {
//             // Invalid email or password
//             console.log('Invalid email or password. Please try again.');
//           } else {
//             // Handle other error cases
//             console.log('An unexpected error occurred. Please try again later.');
//           }
//         }
//       }
//     );
//   }
  
// }


import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  model: any = {}; // Declare an object to hold form values

  constructor(private adminService: AdminService, private router: Router) { }

  onSubmit() {
    this.adminService.loginAdmin(this.model).subscribe(
      (response: any) => {
        // Check if the response is JSON
        if (response instanceof Object) {
          // Handle successful JSON response
          console.log('Login successful');
          // Redirect to the admin dashboard or any other page
          this.router.navigate(['/admin/dashboard']);
        } else if (typeof response === 'string') {
          // Handle successful plain text response
          console.log(response);
          // Redirect to the admin dashboard or any other page
          this.router.navigate(['/admin/dashboard']);
        } else {
          // Handle unexpected response format
          console.error('Unexpected response format:', response);
        }
      },
      (error) => {
        // Handle login errors
        console.error('Login failed:', error);
  
        if (error instanceof HttpErrorResponse) {
          console.log('Status Code:', error.status);
          console.log('Response Body:', error.error);
        }
  
        // You can display an error message to the user based on the error status or message
      }
    );
  }
  
}  
