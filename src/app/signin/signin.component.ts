import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

    errormassege:string=""
    isLoading:boolean=false
    constructor(private _AuthService:AuthService ,private _Router:Router){}
 sigInFrom:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{6,}$')]),
  })
  
  sigIn(sigInFrom:FormGroup){
    this.isLoading=true
  console.log(sigInFrom.value)
  this._AuthService.Login(sigInFrom.value).subscribe({
    next:(response)=>{
      console.log(response)
      if(response.message == 'success'){
        localStorage.setItem('userToken',response.token)
        this._AuthService.decodedUserData()
this._Router.navigate(['/home'])
      }
      this.isLoading=false
  },
    error:(err)=>{
      this.errormassege=err.error.message
      this.isLoading=false
      console.log( this.errormassege)
  
    }
    
  })
  }
  }
  

