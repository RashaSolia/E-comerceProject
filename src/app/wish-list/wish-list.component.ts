import { Component ,OnInit } from '@angular/core';
import { WishlistService } from '../service/wishlist.service';

import Swal from 'sweetalert2';
import { CardService } from '../service/card.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent  implements OnInit{
 
 favDetails:any

constructor(private _WishlistService:WishlistService, private _CardService:CardService){

}

ngOnInit(): void {
this.addfav()
}
  


addfav(){
  this._WishlistService.getloggedUserwishlist().subscribe({
    next:(response)=>{
      console.log(response.data)
  this.favDetails=response.data
    },
    error:(err)=>{
      console.log(err)
  
    }
  })
}



removeItem(id:string){
  this._WishlistService.removeproductfromwishlist(id).subscribe({
    next:(response)=>{
      console.log(response.data)
      this.favDetails=response.data
        },
        error:(err)=>{
          console.log(err)
      
        }
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
       console.log(err)}
     
      } ) }
}