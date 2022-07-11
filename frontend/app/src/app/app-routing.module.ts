import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutEntpComponent } from './entp/about-entp/about-entp.component';
import { EntpNavComponent } from './entp/entp-nav/entp-nav.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { HomeComponent } from 'src/landing/home/home.component';
import { EntpAdditInfoComponent } from './entp/entp-addit-info/entp-addit-info.component';
import { EntpCollaboratorsComponent } from './entp/entp-collaborators/entp-collaborators.component';
import { CommodityComponent } from './entp/commodity/commodity.component';
import { EntpCategoryComponent } from './entp/entp-category/entp-category.component';
import { CommodityAndCategoryComponent } from './entp/commodity-and-category/commodity-and-category.component';
import { TableLayoutComponent } from './entp/table-layout/table-layout.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ApproveComponent } from './admin/approve/approve.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent

  },
  {
      path:'admin',component:AdminNavComponent,
      children: [
       {path:"approve", component: ApproveComponent}
      ] 

  },
  {
   path:"entp",
   component:EntpNavComponent,
   children: [
    {path:"about", component: AboutEntpComponent},
    {path:"change_pass", component: ChangePassComponent},
    {path:"additional_info", component: EntpAdditInfoComponent},
    {path:"collaborators", component: EntpCollaboratorsComponent},
    {path:"commodities", component: CommodityComponent},
    {path:"category", component: EntpCategoryComponent},
    {path:'add/:cat_name', component: CommodityAndCategoryComponent},
    {path:'tableLayout', component: TableLayoutComponent}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
