import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  // forgotpasswordForm:FormGroup=new FormGroup({
  //   email:new FormControl(null,[Validators.required,Validators.email])
  // })
  
  // ForgotPassword(forgotpasswordForm:FormGroup){
  //   console.log(forgotpasswordForm)
  // }
  successMessage:string=''
 errMessage:string=''
 verifyerr:string=''
  constructor(private _AuthService:AuthService,private _Router:Router){

  }

forgotForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
  })
  

  forgotPassword(forgotForm:FormGroup){
this._AuthService.forgotPassword(forgotForm.value).subscribe({
  next:(response)=>{
console.log(response)
this.successMessage=response.message
this.errMessage=''
document.querySelector('.forgotPassword')?.classList.add('d-none')
 
document.querySelector('.verifyCode')?.classList.remove('d-none')
},
  error:(err)=>{
console.log(err)
this.errMessage=err.error.message

  }

})

    }

    verifyCodeForm:FormGroup=new FormGroup({
      resetCode:new FormControl(null,[Validators.required,Validators.email])
      })
    verifyCode( verifyCodeForm:FormGroup){
console.log(verifyCodeForm)
this._AuthService.verifyCode(verifyCodeForm.value).subscribe({
  next:(response)=>{
    console.log(response)
    if(response.status="Success"){
this._Router.navigate(['/resetPassword'])
this.verifyerr=''
    }
  },
  error:(err)=>{
    console.log(err)
    this.verifyerr=err.error.message
  }
})
    }
  
}
