import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { ToastComponent } from 'src/app/toast/toast/toast.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

        model = { username: '', password: '' };
        errorMessage: string = '';
        loading: boolean = false;

       constructor(private authService:AuthService,private router:Router){

       }
        ngOnInit(): void {
          
        }

      

        onSubmit(): void {
          console.log("user login data ", this.model);
          
           // Set loading to true when starting the request
      
          this.authService.userLogin(this.model.username, this.model.password).subscribe(
            (response) => {
              this.authService.setAuthToken(response.token);
              localStorage.setItem("userId",response.userId);
              // Use setTimeout to simulate the spinner for 2 seconds
              setTimeout(() => {
                this.loading = true;
                this.router.navigate(['user/dashboard']);
                this.loading = false; // Set loading to false after navigation
                console.log("User logged in successfully");
              }, 1000);
            },
            (error) => {
              this.errorMessage = 'Invalid username or password';
              window.confirm("Invalid username or password");
              this.loading = false; // Set loading to false in case of an error
            }
          );
        }


}
