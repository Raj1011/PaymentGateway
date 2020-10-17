import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import {  OtpScreenComponent } from './../otp-screen/otp-screen.component'

import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup
  submitted: boolean = false;
  recipe: any;
  constructor(private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      card_no: new FormControl('', Validators.required)
    });

    if(history.state && history.state.recipe){
      localStorage.setItem('recipe',history.state.recipe);
      this.recipe = history.state.recipe;
    }else{
      this.recipe = localStorage.getItem('recipe');

    }
    
  }

  get f() { return this.paymentForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
        return;
    }

    // display form values on success
    this.modalService.open(OtpScreenComponent, {centered: true})
}
}
