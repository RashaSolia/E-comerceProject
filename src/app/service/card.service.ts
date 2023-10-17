import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
baseUrl:string='https://ecommerce.routemisr.com'
Headers:any={
  token:localStorage.getItem('userToken')
}
  constructor(private _HttpClient:HttpClient) {}

  addToCart(id:string):Observable<any>{
return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,{productId:id},{
  headers:this.Headers
  })
 

}

  gitUserCart():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,{
      headers:this.Headers
      })
      
  }

  removeCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${id}`,{
      headers:this.Headers
      },
)
  }

  upDateCart(id:string,count:number):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${id}`,
    {count:count} ,
    {
      headers:this.Headers
      }
    )
      }

      handlePayment(id:string,shippingAddress:any):Observable<any>{
        return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
          shippingAddress:shippingAddress
        },
        {
          headers:this.Headers
          }
    
        )
      }
    
}
 