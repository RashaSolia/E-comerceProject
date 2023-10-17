import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheakoutComponent } from './cheakout/cheakout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path:"",redirectTo:'signin',pathMatch:"full"},
  {path:"home" ,canActivate:[authGuard],component:HomeComponent },
  {path:"categories",canActivate:[authGuard],component: CategoriesComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent },
  {path:"products",canActivate:[authGuard],component:ProductsComponent },
  {path:"mycart",canActivate:[authGuard],component:MyCartComponent},
  {path:"wishlist",canActivate:[authGuard],component:WishListComponent},
  {path:"cheakout",canActivate:[authGuard],component:CheakoutComponent},
  {path:"productDetails/:id",canActivate:[authGuard],component:ProductDetailsComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
