import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.component.html',
  styleUrls: ['./otp-screen.component.scss']
})
export class OtpScreenComponent implements OnInit {

  otpForm: FormGroup
  submitted: boolean = false;
  constructor(private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: new FormControl('', Validators.required)
    });
  }

  
  get f() { return this.otpForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.otpForm.invalid) {
        return;
    }

    const otp = this.otpForm.get('otp').value;
    if(otp === '123456'){
      this.router.navigate(['/payment-success']);
      this.activeModal.dismiss();
    }else{
      this.router.navigate(['/payment-failed']);
      this.activeModal.dismiss();
    }
}

}
