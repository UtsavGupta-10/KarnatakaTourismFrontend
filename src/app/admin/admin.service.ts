import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../modal/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   apiUrl:string='http://localhost:9097/'
   apiUrlAdmin:string='http://localhost:9091/api/admins/'
   apiUrlFeedback:string='http://localhost:9993/api/feedback/';

  constructor(private http:HttpClient) { }

    getPlace():Observable<Place[]>{
          return this.http.get<Place[]>(this.apiUrl+'place/viewplace')
    }

    getPlaceById(placeId:number):Observable<Place>{
         return this.http.get<Place>(this.apiUrl+'editplace/'+placeId);
    }

    addPlace(data:any){
      return this.http.post<Place>(this.apiUrl+'place',data)
    }
    
    registerAdmin(data:any){
       return this.http.post(this.apiUrlAdmin+'add',data)
    }

    loginAdmin(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrlAdmin}login`, data, { responseType: "text" as "json" });
    }

    getAllFeedback():Observable<any[]>{
      return this.http.get<any[]>(this.apiUrlFeedback+'all')
    }
}
