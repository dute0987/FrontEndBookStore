import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
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
      { path: 'quickview', component: QuickViewComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
