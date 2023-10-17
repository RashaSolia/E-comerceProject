import { Component } from '@angular/core';
import { DataService } from './../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardService } from '../service/card.service';
import Swal from 'sweetalert2';
import { WishlistService } from '../service/wishlist.service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
  })
  export class ProductDetailsComponent {
productId:any;
productDetails:any;
constructor(private _Activate:ActivatedRoute,private _DataService:DataService,private _CardService:CardService,private _WishlistService:WishlistService){
  this._Activate.paramMap.subscribe((param)=>{
    console.log(param.get('id'))
    this.productId=param.get('id');
   })
this.getDetails()
}


getDetails(){
this._DataService.getproductDetails(this.productId).subscribe({
next:(response)=>{
this.productDetails=response.data;
}
})
}



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  autoplay:true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 200,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}
addToCart(productId:string){
   this._CardService.addToCart(productId).subscribe({
    next:(response)=>{
      console.log(response)
      if(response.status=="success"){
 
        Swal.fire({
          icon: 'success',
          text: response.message,
        })}
      },
      error:(err)=>{
        console.log(err)}
      
       } ) }


       addTofav(productId:string){
        this._WishlistService.addProductToWishlist(productId).subscribe({
          next:(response)=>{
            console.log(response)
      
      if(response.status=="success"){
        Swal.fire({
          text: response.message,
        })
      }
      
          },
          error:(err)=>{
            console.log(err)
          }
      
          
        })
        }
      
}

