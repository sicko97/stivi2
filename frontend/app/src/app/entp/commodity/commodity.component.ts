import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Commodity } from 'src/app/models/commodity';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpDetials } from 'src/app/models/entp_details';
import { CommodityService } from 'src/app/services/commodity.service';
import { EntpServiceService } from 'src/app/services/entp-service.service';
import { CommodityDataSource, CommodityItem } from './commodity-datasource';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<CommodityItem>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Commodity>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'unit','pdv'];
  myEntp: Enterprise;

  visible: boolean;
  commodity_name:string;
  commodity_unit:string;
  commodity_id: string;
  entp_details: EntpDetials;
  prices: {object_id:number,purchase_price:number,selling_price:number,qty:number,min:number,max:number}[]=[];

  constructor(
    private commodityService: CommodityService,
    private entpService:EntpServiceService) {
    // this.dataSource = new CommodityDataSource();
  }

  ngOnInit(): void {
   this.myEntp = JSON.parse(sessionStorage.getItem('entp')) as Enterprise;
   this.entpService.getDetails(this.myEntp.PIB).subscribe((res)=>{
    if(res){
      this.entp_details = JSON.parse(res['details']) as EntpDetials;
      this.entp_details.storage.forEach(storage => {
        this.prices.push({object_id:parseInt(storage.id),purchase_price:null,selling_price:null,qty:null,min:null,max:null})
        
      });
    }
   })
   
   this.visible = false;

    this.commodityService.getAll(this.myEntp.PIB).subscribe((comms:Commodity[])=>{
      this.dataSource = new MatTableDataSource(comms);
      this.dataSource.paginator = this.paginator;
    });
  }

  openForm(){
    this.visible = true;
  }

  confirm(){
    console.log(this.prices);
    //TODO: fali pdv sa fronta i fali slika
    this.commodityService
          .inserCommodity(this.commodity_id, this.myEntp.PIB, this.commodity_name, this.commodity_unit,0,JSON.stringify(this.prices))
          .subscribe((res)=>{
            if(res['message'] != 'commodity inserted') alert("Error while adding new commodity");
            else {
              this.commodityService.getAll(this.myEntp.PIB).subscribe((comms:Commodity[])=>{
                this.dataSource.data = comms;
              })
            }
          })
  }

  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  //   this.table.dataSource = this.dataSource;
  // }
}
