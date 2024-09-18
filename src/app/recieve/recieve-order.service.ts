import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecieveOrderService {

  constructor(private http: HttpClient,) { }

  getOrders() {
    return this.http.get<any>(environment.API + `/order`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  getRecieve() {
    return this.http.get<any>(environment.API + `/recieve`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  getLocation() {
    return this.http.get<any>(environment.API + `/location`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  getIdRecieve(id:any) {
    return this.http.get<any>(environment.API + `/recieve/${id}`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  getProduct() {
    return this.http.get<any>(environment.API + `/product`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  add(data:any){
    return this.http.post<any>(environment.API+ `/order`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
  add_pre_recieve(data:any){
    return this.http.post<any>(environment.API+ `/recieve`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
  add_tag_detail(data:any){
    return this.http.post<any>(environment.API+ `/tagDetail`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

  }

