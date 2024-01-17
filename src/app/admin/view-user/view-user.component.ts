import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
     userList:any[]=[];

     constructor(private userService:UserService){
            
     }

    ngOnInit(): void {
      this.getAllUsers()
    }
     
     getAllUsers(){

        this.userService.getAllUsers().subscribe(data => {
           this.userList=data
           console.log("data user",data)
        })
        
     }

      
}
