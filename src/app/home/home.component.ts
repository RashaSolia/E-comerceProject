import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardService } from '../service/card.service';
import Swal from 'sweetalert2';
import { WishlistService } from '../service/wishlist.service';

// import swal from 'sweetalert';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    catArr:any[]=[]
    proArr:any[]=[]
   branArr:any[]=[]
   searchval:string=''


constructor(private _DataService:DataService ,private _CardService:CardService, private _WishlistService:WishlistService){
  this.getCategories()
  this.getBrabds()
  this.getProducts()
}
getCategories(){ 

  this._DataService.getData('categories').subscribe((response)=>{
this.catArr=response.data
    console.log(this.catArr)
  
  })

}


getProducts(){ 

  this._DataService.getData('products').subscribe((response)=>{
this.proArr=response.data
    console.log(this.proArr)
  
  })

}

getBrabds(){ 

  this._DataService.getData('brands').subscribe((response)=>{
this.branArr=response.data.slice(0,4)
    console.log(this.branArr)
  
  })

}

customOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
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
