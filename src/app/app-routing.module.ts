import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentFailedComponent } from './components/payment-failed/payment-failed.component';
import { OtpScreenComponent } from './components/otp-screen/otp-screen.component' 


const routes: Routes = [{
  path: '',
  component: RecipeListComponent
},{
  path: 'checkout',
  component: PaymentComponent
},{
  path: 'payment-success',
  component: PaymentSuccessComponent
},{
  path: 'payment-failed',
  component: PaymentFailedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
