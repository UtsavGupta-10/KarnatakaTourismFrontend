import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
         
  signUpData = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor(private userService: UserService, private route: Router) {}

  onSubmit() {
    console.log("data admin ", this.signUpData);

    if (this.signUpData.password !== this.signUpData.repeatPassword) {
      window.confirm("Password does not match");
    } else {
      // Password validation
      if (!this.validatePassword(this.signUpData.password)) {
        window.confirm("Invalid password format");
        return;
      }

      let data = {
        name: '',
        emailId: '',
        password: '',
        role: 'user'
      };

      data.name = this.signUpData.name;
      data.emailId = this.signUpData.email;
      data.password = this.signUpData.password;

      // Call user service
      this.userService.registerUser(data).subscribe(
        (response) => {
          window.alert("Registered Successfully");
          setTimeout(() => {
            this.route.navigate(['login']);
          }, 1000);
        },
        (error) => {
          window.alert("Something went Wrong");
        }
      );
    }
  }

  validatePassword(password: string): boolean {
    // Password should not contain spaces
    if (password.includes(" ")) {
      return false;
    }

    // Password should have at least one capital letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Password should have at least one special character
    if (!/[^A-Za-z0-9]/.test(password)) {
      return false;
    }

    // Password should have at least one digit
    if (!/\d/.test(password)) {
      return false;
    }

    // Password should have a minimum length of 8 characters
    if (password.length < 8) {
      return false;
    }

    return true;
  }
}
