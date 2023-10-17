import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  errormassege:string=""
  isLoading:boolean=false
  constructor(private _AuthService:AuthService ,private _Router:Router){}
resetFrom:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{6,}$')]),
})

reset(resetFrom:FormGroup){
  this.isLoading=true
console.log(resetFrom.value)
this._AuthService.resetPassword(resetFrom.value).subscribe({
  next:(response)=>{
    console.log(response)
  this.isLoading=false
if(response.token){
  this._Router.navigate(['/signin'])
}

  },
  error:(err)=>{
    console.log(err)
  this.isLoading=false
this.errormassege=err.error.message

  }

})
}
}



