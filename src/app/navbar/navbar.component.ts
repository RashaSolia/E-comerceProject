import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  num:string=''
islogin:boolean=false;
constructor(private _AuthService:AuthService,private _CardService:CardService){
  _AuthService.userData.subscribe({
    next:()=>{
      if(_AuthService.userData.getValue() !== null){
      this.islogin =true
      }else{
        this.islogin =false
      }
    }
  })
}
logOut(){
  this._AuthService.LogOut()
}


getnum(){
  this._CardService.gitUserCart().subscribe({
    next:(response)=>{
      console.log(response.data)
      this.num=response.numOfCartItems
        },
        error:(err)=>{
          console.log(err)
      
        }
  })
}
ngOnInit(): void {
  this.getnum()
}

}

