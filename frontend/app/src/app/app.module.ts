import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntpNavComponent } from './entp/entp-nav/entp-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutEntpComponent } from './entp/about-entp/about-entp.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from '../landing/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from '../landing/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../landing/register/register.component';
import {MatInputModule} from '@angular/material/input';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { HttpClientModule } from '@angular/common/http';
import { EntpAdditInfoComponent } from './entp/entp-addit-info/entp-addit-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { EntpCollaboratorsComponent } from './entp/entp-collaborators/entp-collaborators.component';
import { CommodityComponent } from './entp/commodity/commodity.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EntpCategoryComponent } from '../app/entp/entp-category/entp-category.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogCategoryComponent } from './dialog-category/dialog-category.component';
import { CommodityAndCategoryComponent } from './entp/commodity-and-category/commodity-and-category.component';
import { TableLayoutComponent } from './entp/table-layout/table-layout.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ApproveComponent } from './admin/approve/approve.component';





@NgModule({
  declarations: [
    AppComponent,
    EntpNavComponent,
    AboutEntpComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChangePassComponent,
    EntpAdditInfoComponent,
    EntpCollaboratorsComponent,
    CommodityComponent,
    EntpCategoryComponent,
    DialogCategoryComponent,
    CommodityAndCategoryComponent,
    TableLayoutComponent,
    AdminNavComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
