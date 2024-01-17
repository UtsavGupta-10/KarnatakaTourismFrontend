import { Injectable } from '@angular/core';
import { User } from '../modal/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Place } from '../modal/place';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:9999/api/users/';
  apiUrlPlace="http://localhost:9097/place/";
  apiUrlFeedback="http://localhost:9993/api/feedback/"
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any[]>{
     return this.http.get<any[]>(this.apiUrl+'allUsers')
  }

  getPlaces():Observable<Place[]>{
    return this.http.get<Place[]>(this.apiUrlPlace+'viewplace')
  }

  registerUser(data :any){
      return this.http.post(this.apiUrl+'signup',data,{observe:"response"});
  }

   getAllTags():Observable<any[]>{
    let data= this.http.get<any[]>(this.apiUrlPlace+'all');

    return data;
   }

    getPlacesByTag(tag:string):Observable<any[]>{

       return this.http.get<any[]>(this.apiUrlPlace+'tag/'+tag);
    }

    addFeedback(data:any){
      
      return this.http.post(this.apiUrlFeedback+'add',data);
    }

    getPlaceById(placeId:number){
      return this.http.get(this.apiUrlPlace+placeId);
    }

}
