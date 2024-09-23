import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private http: HttpClient,) { }

  getUserDetail() {
    return this.http.get<any>(environment.API + `/user`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  add(data:any){
    return this.http.post<any>(environment.API+ `/user`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
}
