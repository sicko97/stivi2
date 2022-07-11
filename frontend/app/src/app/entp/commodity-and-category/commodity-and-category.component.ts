import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commodity } from 'src/app/models/commodity';
import { Enterprise } from 'src/app/models/enterprise';
import { CommodityService } from 'src/app/services/commodity.service';

@Component({
  selector: 'app-commodity-and-category',
  templateUrl: './commodity-and-category.component.html',
  styleUrls: ['./commodity-and-category.component.css']
})
export class CommodityAndCategoryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private commodityService: CommodityService) { }

  commodities: Commodity[]
  commodities_temp: Commodity[]
  entp: Enterprise;
  cat_name: string;

  ngOnInit(): void {
   this.cat_name = this.route.snapshot.paramMap.get('cat_name')
   console.log(this.cat_name)
   this.entp = JSON.parse(sessionStorage.getItem('entp'))   

   this.commodityService.getAll(this.entp.PIB).subscribe((data: Commodity[])=>{
    this.commodities = data;
    this.commodities_temp = this.commodities;
   })
  }

  addToCategory(comm){
   this.commodityService.addToCategory(this.cat_name, this.entp.PIB, comm.id).subscribe((res)=>{
    if(res['message'] != 'ok') alert(res['message'])
    else alert(`${comm.name} added to category ${this.cat_name}`)
   })
  }

  filterByName(event){
    const searchParam = event.target.value;
    this.commodities_temp = this.commodities.filter(comm=> comm.name.includes(searchParam))
  }

}
