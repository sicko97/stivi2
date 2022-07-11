import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  form: FormGroup
  errorMessage: string

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'old': new FormControl(null,{
        validators: [
          Validators.required
        ]
      }),
      'new1': new FormControl(null, {
        validators:[
          Validators.required
        ]
      }),
      'new2': new FormControl(null, {
        validators:[
          Validators.required
        ]
    })
  })

  }
  change(): void{
    if (this.form.value.new1 !== this.form.value.new2)
      this.errorMessage = "Passwords don't match"
  }

}