import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

import { Enterprise } from 'src/app/models/enterprise';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  constructor(private adminService : AdminService,private router:Router) {
  }
  dataSource : Enterprise[] = [];
  displayedColumns:string[] = ["firstname","lastname","username","pib","approve","decline"];

  ngOnInit(): void {
      this.adminService.getAllPendingEnterprises().subscribe((data:Enterprise[])=>{
        this.dataSource = data;
      })
  }

  approve(enterprise){
      this.adminService.approveEntp(enterprise.username);
      this.router.navigate(['admin/approve']);
  }

  decline(enterprise){

  }

  
 
}
