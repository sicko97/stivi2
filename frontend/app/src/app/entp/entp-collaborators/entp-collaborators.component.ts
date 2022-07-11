import { Component, OnInit } from '@angular/core';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpServiceService } from 'src/app/services/entp-service.service';

@Component({
  selector: 'app-entp-collaborators',
  templateUrl: './entp-collaborators.component.html',
  styleUrls: ['./entp-collaborators.component.css']
})
export class EntpCollaboratorsComponent implements OnInit {

  constructor(private entpService: EntpServiceService) { }

  enterprises: Enterprise[];
  mypib: String;
  no_days: String;
  rabat: String;

  ngOnInit(): void {
    this.mypib = (JSON.parse(sessionStorage.getItem('entp')) as Enterprise).PIB;

  }

  getCollab(event){
    const pib = event.target.value;
    this.entpService.getEnterprises(pib, this.mypib).subscribe((entps:Enterprise[])=>{
      this.enterprises = entps;
    }) 

  }

  add(i){
    this.entpService.addCollab(this.mypib, this.enterprises[i].PIB, this.no_days, this.rabat).subscribe((res)=>{
      if(res['message'] === 'ok') alert("ok");
      else alert("error");
    })
  }

}
