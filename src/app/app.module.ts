import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import{HttpClientModule} from'@angular/common/http'
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheakoutComponent } from './cheakout/cheakout.component';
import { AddHeaderInterceptor } from './interceptor/add-header.interceptor';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    BrandsComponent,
    NotFoundComponent,
    NavbarComponent,
    MyCartComponent,
    WishListComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    ProductDetailsComponent,
    MainsliderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CheakoutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:AddHeaderInterceptor,
  //   multi:true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
