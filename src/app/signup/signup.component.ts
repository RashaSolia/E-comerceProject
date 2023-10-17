import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  errormassege:string=""
  isLoading:boolean=false
  constructor(private _AuthService:AuthService){}
registerFrom:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{6,}$')]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{6,}$')]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('^(01)[0125][0-9]{8}')])
 },{validators:this.RepasswordMatch})

RepasswordMatch(form:any){

let password=form.get('password')
let rePassword=form.get('rePassword')
if(password.value === rePassword.value){
return null
}else{
rePassword.setErrors({repasswordMatch:'repassword not matched'})
return {repasswordMatch:'repassword not matched'}

}
}

signUp(registerFrom:FormGroup){
  this.isLoading=true
console.log(registerFrom.value)
this._AuthService.Regester(registerFrom.value).subscribe({
  next:(response)=>{console.log(response)
    this.isLoading=false
},
  error:(err)=>{console.log(err)
    console.log(err)
    this.errormassege=err.error.message
    this.isLoading=false

  }

})
}
}
