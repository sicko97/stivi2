import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpServiceService } from 'src/app/services/entp-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: String;

  constructor(
    private router: Router,
    private entpService: EntpServiceService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'username': new FormControl(null, {
        validators: [
          Validators.required
        ] }),
        'password': new FormControl(null, {
          validators: [
            Validators.required
          ]
        })
    });
  }

  login():void {
    // this.router.navigate(['entp/change_pass'])
    if(this.form.valid){
      this.entpService.login(this.form.value.username, this.form.value.password).subscribe((entp:Enterprise)=>{
        if (entp){
          if (entp.status === "active") this.router.navigate(['entp/additional_info']); 
          if (entp.status === "init") this.router.navigate(['entp/about']);
          if (entp.status === "deactive") this.router.navigate(['']);
          else sessionStorage.setItem('entp', JSON.stringify(entp));
        }else this.errorMessage = "User with given password and username doesnt exist";

        

      })
    }

  }

}
