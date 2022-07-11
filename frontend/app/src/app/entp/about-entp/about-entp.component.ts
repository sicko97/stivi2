import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BankAccount } from 'src/app/models/bank_account';
import { CashRegister } from 'src/app/models/cash_register';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpDetials } from 'src/app/models/entp_details';
import { Storage } from 'src/app/models/storage';
import { EntpServiceService } from 'src/app/services/entp-service.service';

@Component({
  selector: 'app-about-entp',
  templateUrl: './about-entp.component.html',
  styleUrls: ['./about-entp.component.css']
})
export class AboutEntpComponent implements OnInit {

  //data for Account table
  dataSourceBank : MatTableDataSource<BankAccount>;
  displayedColumnsBank: string[] = ['bank_name', 'account_number'];

  //data for Storage table
  dataSourceStorage: MatTableDataSource<Storage>;
  displayedColumnsStorage: string[] = ['storage_id', 'storage_name'];

  //data for Register table
  dataSourceRegister: MatTableDataSource<CashRegister>;
  displayedColumnsRegister: string[] = ['register_type', 'location'];
  
  entp_details: EntpDetials;
  entp: Enterprise;
  constructor(
    private entpService: EntpServiceService
  ) { }

  ngOnInit(): void {
     this.entp = JSON.parse(sessionStorage.getItem('entp')) as Enterprise;
    this.entpService.getDetails(this.entp.PIB).subscribe((res)=>{
      this.entp_details = JSON.parse(res['details']) as EntpDetials;
      // console.log(entp_details) 
      this.dataSourceBank = new MatTableDataSource(this.entp_details.bank_account);
      this.dataSourceStorage = new MatTableDataSource(this.entp_details.storage)
      this.dataSourceRegister = new MatTableDataSource(this.entp_details.cash_register)
    })
  }

}
