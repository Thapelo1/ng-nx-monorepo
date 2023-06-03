import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './_helpers/must-match-validator';


@Component({
  selector: 'teneightytp-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });

}

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return true;
    }
    console.log(this.registerForm.value);
    
    return false;
  }
  

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }


}
