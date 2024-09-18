import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagdetailService {

  constructor(private http: HttpClient,) { }

  getTagDetail() {
    return this.http.get<any>(environment.API + `/tagDetail`).pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
}
