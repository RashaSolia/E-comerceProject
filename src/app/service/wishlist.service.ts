import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private _HttpClient:HttpClient ) { }
  Headers:any={
    token:localStorage.getItem('userToken')
  }

  addProductToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id},{
      headers:this.Headers
      })
     
  }

  getloggedUserwishlist():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist'
    ,{
      headers:this.Headers
      }
      )

  }

  removeproductfromwishlist(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
      headers:this.Headers
      })
  }

  
}
