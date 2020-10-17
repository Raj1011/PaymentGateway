import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentFailedComponent } from './components/payment-failed/payment-failed.component';
import { OtpScreenComponent } from './components/otp-screen/otp-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipeListComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent,
    OtpScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    OtpScreenComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
