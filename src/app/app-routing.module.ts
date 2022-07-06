import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { MyWishlistComponent } from './component/my-wishlist/my-wishlist.component';
import { MyallorderComponent } from './component/myallorder/myallorder.component';
import { MyplaceorderComponent } from './component/myplaceorder/myplaceorder.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignupComponentComponent } from './component/signup-component/signup-component.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'signUp', component: SignupComponentComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children:
      [{ path: 'getallbook', component: GetallbookComponent },
      { path: 'quickview', component: QuickViewComponent },
      { path: 'cart', component: MyCartComponent },
      { path: 'wishlist', component: MyWishlistComponent },
      { path: 'allorder', component: MyallorderComponent },
      { path: 'placeorder', component: MyplaceorderComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
