import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BaseUrl:string="https://ecommerce.routemisr.com/api/v1/"
  constructor(private _HttpClient:HttpClient ) {
   } 
   
   getData(DataType:string):Observable<any>{
      return this._HttpClient.get(this.BaseUrl+DataType)
  }


  getproductDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
}
