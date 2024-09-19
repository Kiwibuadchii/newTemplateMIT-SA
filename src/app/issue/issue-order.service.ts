import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueOrderService {

  constructor(private http: HttpClient,) { }

  getOrdersIssue() {
    return this.http.get<any>(environment.API + `/production`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  getConfirm_OrdersIssue() {
    return this.http.get<any>(environment.API + `/production_details`).pipe(
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
  addIssue(data:any){
    return this.http.post<any>(environment.API+ `/production`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
  addIssueDetails(data:any){
    return this.http.post<any>(environment.API+ `/production_details`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
  getIdIssue(id:any) {
    return this.http.get<any>(environment.API + `/production_details/${id}`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  AcceptIssue(data:any){
    return this.http.post<any>(environment.API+ `/issue`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

}
