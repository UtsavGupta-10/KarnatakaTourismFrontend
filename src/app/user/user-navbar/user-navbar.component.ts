import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
       
  constructor(private router:Router,private authService:AuthService){
    
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
