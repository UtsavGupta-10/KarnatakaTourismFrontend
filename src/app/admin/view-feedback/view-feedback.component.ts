import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit{
  feedbackList:any[]=[];

  constructor(private adminService:AdminService){

  }
  ngOnInit(): void {
       this.fetchFeedbackData()
  }
                 
  fetchFeedbackData(){
        this.adminService.getAllFeedback().subscribe(data => {
           this.feedbackList=data
           console.log("data ff",data)
        })
  }
  
   
}
