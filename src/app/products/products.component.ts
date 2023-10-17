import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { CardService } from '../service/card.service';
import { WishlistService } from '../service/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  proArr:any[]=[]
  searchval:string=''


constructor(private _DataService:DataService,private _CardService:CardService,private _WishlistService:WishlistService){
  this.getProducts()
} 



getProducts(){ 

  this._DataService.getData('products').subscribe((response)=>{
this.proArr=response.data
    console.log(this.proArr)
  
  })

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
    console.log(err)
  
  }
  })
  }


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
