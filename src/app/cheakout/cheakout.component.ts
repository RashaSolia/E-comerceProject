import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-cheakout',
  templateUrl: './cheakout.component.html',
  styleUrls: ['./cheakout.component.scss']
})
export class CheakoutComponent  implements OnInit{
  productId:any
  isLoading:boolean=false

  navigateTOPage(url:string){
window.location.href=url
  }
  constructor(private _CardService:CardService ){}
  
  payment:FormGroup =new FormGroup({
    details:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^(01)[0125][0-9]{8}')]),
    city:new FormControl(null,[Validators.required])
  })
  onlinePayment(payment:FormGroup){
    this.isLoading=true
  console.log(payment)
  this._CardService.handlePayment( this.productId,payment.value).subscribe({
    next:(response)=>{
      console.log(response)
      this.isLoading=true
      if(response.status=="success"){
this.navigateTOPage(response.session.url)
      }

      },
      error:(err)=>{
        console.log(err)
      
  }})

  }
ngOnInit(): void {
  this._CardService.gitUserCart().subscribe({
    next:(response)=>{
      console.log(response.data._id)
      this.productId=response.data._id
      },
      error:(err)=>{
        console.log(err)
        this.isLoading=false

      
  }
  })
}

   
}
