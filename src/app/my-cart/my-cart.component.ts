import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit{
  cartDetails:any
  num:string=''
constructor(private _CardService:CardService){}


getCart(){
  this._CardService.gitUserCart().subscribe({
    next:(response)=>{
  console.log(response.data)
  this.cartDetails=response?.data
  this.num=response?.numOfCartItems
    },
    error:(err)=>{
      console.log(err)
  
    }
  })
}
ngOnInit(): void {
  this.getCart() 
}
removeItem(id:string){
  this._CardService.removeCartItem(id).subscribe({
    next:(response)=>{
      console.log(response.data)
      this.cartDetails=response.data
        },
        error:(err)=>{
          console.log(err)
      
        }
  })
}

upDateCart(id:string,count:number){
  this._CardService.upDateCart(id,count).subscribe({
    next:(response)=>{
      console.log(response.data)
      this.cartDetails=response.data
      
        },
        error:(err)=>{
          console.log(err)
      
        }
  })

}
}
