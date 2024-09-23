import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {

  constructor(private http: HttpClient,) { }

  getOrders() {
    return this.http.get<any>(environment.API + `/product`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
  
  add(data:any){
    return this.http.post<any>(environment.API+ `/product`,data).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
}
