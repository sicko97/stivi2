import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpServiceService } from 'src/app/services/entp-service.service';
import { EntpDetials } from 'src/app/models/entp_details';

@Component({
  selector: 'app-entp-nav',
  templateUrl: './entp-nav.component.html',
  styleUrls: ['./entp-nav.component.css']
})
export class EntpNavComponent implements OnInit{

  initialized: boolean;
  details: EntpDetials;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private entpService: EntpServiceService) {}

  ngOnInit(): void {
    let entp =  JSON.parse(sessionStorage.getItem('entp')) as Enterprise;
    // TODO: verify if there is a logged in user
    this.entpService.getDetails(entp.PIB).subscribe((data)=>{
      this.details = JSON.parse(data['details']);
    })
    if (entp.status === "active") this.initialized = false;
    else this.initialized = true;

  }

}
