import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { SignupComponentComponent } from './component/signup-component/signup-component.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import {MatMenuModule} from '@angular/material/menu';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { MyWishlistComponent } from './component/my-wishlist/my-wishlist.component';
import { MyallorderComponent } from './component/myallorder/myallorder.component';
import { MyplaceorderComponent } from './component/myplaceorder/myplaceorder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,LoginComponentComponent,SignupComponentComponent, ForgotPasswordComponent, ResetPasswordComponent, DashboardComponent, GetallbookComponent, QuickViewComponent, MyCartComponent, MyWishlistComponent, MyallorderComponent, MyplaceorderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    NgbModule,MatExpansionModule,
    MatRadioModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
