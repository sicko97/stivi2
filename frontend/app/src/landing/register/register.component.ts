import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntpServiceService } from 'src/app/services/entp-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  logo: File
  imageError: string

  constructor(
    private entpService: EntpServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'username': new FormControl(null,{
        validators: [
          Validators.required
        ]
      }),
      'firstname': new FormControl(null,{
       validators:[
        Validators.required
       ] 
      }),
      'lastname': new FormControl(null,{
        validators:[
          Validators.required
        ]
      }),
      'password': new FormControl(null,{
        validators:[
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/)
        ]
      }),
      'phone': new FormControl(null,{
        validators:[
          Validators.required
        ]}),
      'email': new FormControl(null,{
        validators: [
          Validators.required,
          Validators.email
        ]

      }),
      'pib': new FormControl(null,{
        validators: [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]{8}$/)
        ]
      }),
      'mb': new FormControl(null,{
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]{8}$/)
        ]
      }),
      'entp_name': new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    })
  }

  onFileInputChange(event){
    this.logo = event.target.files[0]

    this.imageError = ""
    const max = 300
    const min = 100
    const allowed_types = ['image/png','image/jpeg']

    if(!allowed_types.includes(this.logo.type)){
      this.imageError = 'Only JPG/PNG formats allowed'
      return 
    }


    const reader = new FileReader()

    reader.onload = (e:any) => {
        const image = new Image()
        image.src = e.target.result
        image.onload = rs => {
          const img_height = rs.currentTarget['height']
          const img_width = rs.currentTarget['width']
          console.log(img_height, img_width)

          if (img_height < min || img_height> max || img_width < min || img_width > max){
            this.imageError = 'Invalid  dimensions'
            console.log(`${this.imageError}`)
            return 
          }
        }
    }
    reader.readAsDataURL(this.logo)
  }

  register(){

    if (this.form.valid && this.imageError.length == 0){
      //ADD CHECK IF USERNAME IS ALREADY TAKEN
      this.entpService.register(this.form.value.firstname, this.form.value.lastname, this.form.value.username,
        this.form.value.password, this.form.value.entp_name, this.form.value.phone, this.form.value.email, this.logo,
        this.form.value.pib, this.form.value.mb).subscribe((res)=>{
          if (res['message'] == 'user added') alert("Ok");
          else if (res['message'] == 'user already exists') alert("User already exists");
          else alert("Unsuccessful registration");
        })
    }
  }
}
