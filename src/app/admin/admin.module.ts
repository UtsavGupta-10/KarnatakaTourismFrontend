import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component';
import { ViewPlaceComponent } from './view-place/view-place.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule } from '@angular/forms';
import { ViewPlaceCardComponent } from './view-place-card/view-place-card.component';
import { UserService } from '../user/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';



const routes: Routes = [
 
  { path: 'login', component: AdminLoginComponent, pathMatch: 'full' },
 
  {
    path: 'dashboard',
    redirectTo: 'dashboard/addplace', // Redirect /dashboard to /dashboard/addplace
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'viewuser', component: ViewUserComponent, pathMatch: 'full' },
      { path: 'addplace', component: AddPlaceComponent, pathMatch: 'full' },
      { path: 'viewplace', component: ViewPlaceComponent, pathMatch: 'full' },
      { path: 'viewfeedback', component: ViewFeedbackComponent, pathMatch: 'full' },
      { path: 'editplace/:id', component: AddPlaceComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    

    AdminLoginComponent,
    AdminDashboardComponent,
    AddPlaceComponent,
    ViewPlaceComponent,
    ViewFeedbackComponent,
    ViewUserComponent,
    ViewPlaceCardComponent,
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers:[
    
  ]
})
export class AdminModule { }
