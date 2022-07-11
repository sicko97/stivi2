import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCategoryComponent } from 'src/app/dialog-category/dialog-category.component';
import { Category } from 'src/app/models/category';
import { Enterprise } from 'src/app/models/enterprise';
import { EntpServiceService } from 'src/app/services/entp-service.service';


@Component({
  selector: 'app-entp-category',
  templateUrl: './entp-category.component.html',
  styleUrls: ['./entp-category.component.css']
})
export class EntpCategoryComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private entpService: EntpServiceService,
    private router: Router) { }

  category_name: string;
  entp: Enterprise;
  categories: Category[];

  ngOnInit(): void {
    this.entp = JSON.parse(sessionStorage.getItem('entp'))
    this.entpService.getEntpCategories(this.entp.PIB).subscribe((data:Category[])=>{
      this.categories = data
    })
  }

  openDialog():void{
    const dialogRef = this.dialog.open(DialogCategoryComponent,{data: {name:this.category_name}})

    dialogRef.afterClosed().subscribe(result=>{
      this.category_name = result;
      if(this.category_name && this.category_name.length>0){
        this.entpService.createCategory(this.category_name, this.entp.PIB).subscribe(res=>{
          if(res['message']=='error') alert("Greska prilikom kreiranja kategorije")
          else this.entpService.getEntpCategories(this.entp.PIB).subscribe((data:Category[])=>{
            this.categories = data
          })
        })
        console.log(this.category_name)
      }
    })
  }

  addArticles(name){
    this.router.navigate(['/entp/add',name])
  }

}
