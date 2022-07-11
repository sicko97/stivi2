import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpServiceService } from 'src/app/services/entp-service.service';

@Component({
  selector: 'app-entp-addit-info',
  templateUrl: './entp-addit-info.component.html',
  styleUrls: ['./entp-addit-info.component.css']
})
export class EntpAdditInfoComponent implements OnInit {

  register_types: String[] = ["regular", "digital"];
  //TODO: treba napraviti posebnu kolekicju u bazi, ovo je samo privremeno resenje
  classification_codes: {name:string, code:string}[] = [{name:"gajenje pirinca", code:"0112"},{name:"gajenje trske", code:"0114"}];

  accounts: {bank_name:string, number:string}[] = [];
  storages: {id:string, name:string}[] = [];
  registers: {register_type:string, obj_location:string}[] = [];

  selected_category:string;
  selected_code: string;

  step = 0;
  constructor(
    private entpService: EntpServiceService,
    private router: Router) { }

  ngOnInit(): void {

      this.accounts.push({bank_name:'', number:''});
      this.storages.push({id:"",name:""})
      this.registers.push({register_type:"", obj_location:""});
  }

  accountNoChanged(event): void {
    let n = event.target.value;

    if(this.accounts.length > 0) this.accounts.splice(0);

    console.log(n);
    for (let index = 0; index < n; index++) 
      this.accounts.push({bank_name:'', number:''});
      
  }

  storageNoChanged(event): void {
    let n = event.target.value;

    if(this.storages.length > 0) this.storages.splice(0);

    console.log(n);
    for (let index = 0; index < n; index++) 
      this.storages.push({id:"",name:""})
      
  }

  registerNoChanged(event): void {
    let n = event.target.value;

    if(this.registers.length > 0) this.registers.splice(0);

    console.log(n);
    for (let index = 0; index < n; index++) 
      this.registers.push({register_type:"", obj_location:""});
      
  }

  confirm(): void {
    let entp = JSON.parse(sessionStorage.getItem('entp')) as Enterprise;

    //TODO: fali polje za PDV
    this.entpService.init(entp.PIB, this.selected_category, true, this.selected_code,
       JSON.stringify(this.accounts), JSON.stringify(this.storages), JSON.stringify(this.registers) ).subscribe((res)=>{
        //TODO: promeni status iz active u init
        if (res['message']=='entp initialized') {
          this.router.navigate(['entp/about']);
        }
        if (res['message']=='couldnt init entp') alert("Couldnt init")
       })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
